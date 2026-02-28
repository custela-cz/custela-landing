uniform float uTime;
uniform float uMorphProgress;
uniform float uNoiseFrequency;
uniform float uNoiseAmplitude;
uniform float uShapeA;
uniform float uShapeB;
uniform vec2 uMouse;

varying vec3 vNormal;
varying vec3 vPosition;
varying float vDisplacement;

// Simplex 3D noise (inline, no glslify)
vec4 permute(vec4 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod(i, 289.0);
  vec4 p = permute(permute(permute(
    i.z + vec4(0.0, i1.z, i2.z, 1.0))
    + i.y + vec4(0.0, i1.y, i2.y, 1.0))
    + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 1.0 / 7.0;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}

// Shape functions - transform unit sphere position to target shape
vec3 sphereShape(vec3 p) {
  return normalize(p);
}

vec3 torusShape(vec3 p) {
  vec3 n = normalize(p);
  float R = 0.7;
  float r = 0.3;
  float angle = atan(n.z, n.x);
  float angle2 = atan(n.y, length(n.xz) - R);
  return vec3(
    (R + r * cos(angle2)) * cos(angle),
    r * sin(angle2),
    (R + r * cos(angle2)) * sin(angle)
  );
}

vec3 icosahedronShape(vec3 p) {
  vec3 n = normalize(p);
  // Faceted look: quantize the normal direction
  float s = 1.0;
  vec3 q = abs(n);
  float maxC = max(q.x, max(q.y, q.z));
  vec3 result = n * (s / maxC) * 0.8;
  // Add angular distortion for icosa feel
  result += 0.2 * vec3(
    sin(n.y * 5.0) * 0.1,
    cos(n.x * 5.0) * 0.1,
    sin(n.z * 5.0) * 0.1
  );
  return normalize(result) * 0.9;
}

vec3 planeShape(vec3 p) {
  vec3 n = normalize(p);
  return vec3(n.x * 1.5, 0.0, n.z * 1.5);
}

vec3 cubeShape(vec3 p) {
  vec3 n = normalize(p);
  vec3 q = abs(n);
  float maxC = max(q.x, max(q.y, q.z));
  return n * (0.7 / maxC);
}

vec3 getShape(float shapeId, vec3 p) {
  if (shapeId < 0.5) return sphereShape(p);
  if (shapeId < 1.5) return torusShape(p);
  if (shapeId < 2.5) return icosahedronShape(p);
  if (shapeId < 3.5) return planeShape(p);
  return cubeShape(p);
}

void main() {
  vec3 pos = position;

  // Get both shape positions
  vec3 shapeA = getShape(uShapeA, pos);
  vec3 shapeB = getShape(uShapeB, pos);

  // Blend between shapes
  vec3 morphed = mix(shapeA, shapeB, uMorphProgress);

  // Apply noise displacement
  float noise = snoise(morphed * uNoiseFrequency + uTime * 0.3);
  float displacement = noise * uNoiseAmplitude;
  vec3 displaced = morphed + normalize(morphed + vec3(0.001)) * displacement;

  // Mouse interaction: subtle pull toward cursor
  vec3 mouseDir = vec3(uMouse.x, uMouse.y, 0.0) - displaced;
  float mouseDist = length(mouseDir);
  displaced += normalize(mouseDir) * 0.02 / (1.0 + mouseDist * 3.0);

  vNormal = normalize(normalMatrix * normalize(morphed + vec3(0.001)));
  vPosition = displaced;
  vDisplacement = displacement;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(displaced, 1.0);
}
