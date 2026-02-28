uniform float uTime;

varying vec3 vNormal;
varying vec3 vPosition;
varying float vDisplacement;

void main() {
  // View direction for fresnel
  vec3 viewDir = normalize(cameraPosition - vPosition);
  float fresnel = pow(1.0 - max(dot(viewDir, vNormal), 0.0), 3.0);

  // Base colors
  vec3 limeColor = vec3(0.749, 1.0, 0.216);  // #BFFF37
  vec3 whiteColor = vec3(1.0, 1.0, 1.0);

  // Mix color based on displacement
  float colorMix = smoothstep(-0.1, 0.2, vDisplacement);
  vec3 baseColor = mix(whiteColor * 0.15, limeColor * 0.4, colorMix);

  // Add fresnel rim lighting
  vec3 rimColor = mix(limeColor * 0.6, whiteColor, 0.3);
  vec3 finalColor = baseColor + rimColor * fresnel * 0.8;

  // Subtle pulsing
  float pulse = sin(uTime * 0.5) * 0.5 + 0.5;
  finalColor += limeColor * 0.05 * pulse;

  // Alpha: more opaque at rim
  float alpha = 0.3 + fresnel * 0.5;

  gl_FragColor = vec4(finalColor, alpha);
}
