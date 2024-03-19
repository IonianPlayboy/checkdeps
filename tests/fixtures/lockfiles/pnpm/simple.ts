export const simplePnpmLockfile = `lockfileVersion: '6.0'

settings:
  autoInstallPeers: true
  excludeLinksFromLockfile: false

devDependencies:
  '@vitest/ui':
    specifier: latest
    version: 1.3.0(vitest@1.3.1)
  vite:
    specifier: latest
    version: 5.1.6
  vitest:
    specifier: latest
    version: 1.3.1(@vitest/ui@1.3.0)

packages:

  /@esbuild/aix-ppc64@0.19.12:
    resolution: {integrity: sha512-bmoCYyWdEL3wDQIVbcyzRyeKLgk2WtWLTWz1ZIAZF/EGbNOwSA6ew3PftJ1PqMiOOGu0OyFMzG53L0zqIpPeNA==}
    engines: {node: '>=12'}
    cpu: [ppc64]
    os: [aix]
    requiresBuild: true
    dev: true
    optional: true

  /@esbuild/android-arm64@0.19.12:
    resolution: {integrity: sha512-P0UVNGIienjZv3f5zq0DP3Nt2IE/3plFzuaS96vihvD0Hd6H/q4WXUGpCxD/E8YrSXfNyRPbpTq+T8ZQioSuPA==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [android]
    requiresBuild: true
    dev: true
    optional: true

  /@esbuild/android-arm@0.19.12:
    resolution: {integrity: sha512-qg/Lj1mu3CdQlDEEiWrlC4eaPZ1KztwGJ9B6J+/6G+/4ewxJg7gqj8eVYWvao1bXrqGiW2rsBZFSX3q2lcW05w==}
    engines: {node: '>=12'}
    cpu: [arm]
    os: [android]
    requiresBuild: true
    dev: true
    optional: true

  /@esbuild/android-x64@0.19.12:
    resolution: {integrity: sha512-3k7ZoUW6Q6YqhdhIaq/WZ7HwBpnFBlW905Fa4s4qWJyiNOgT1dOqDiVAQFwBH7gBRZr17gLrlFCRzF6jFh7Kew==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [android]
    requiresBuild: true
    dev: true
    optional: true

  /@esbuild/darwin-arm64@0.19.12:
    resolution: {integrity: sha512-B6IeSgZgtEzGC42jsI+YYu9Z3HKRxp8ZT3cqhvliEHovq8HSX2YX8lNocDn79gCKJXOSaEot9MVYky7AKjCs8g==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [darwin]
    requiresBuild: true
    dev: true
    optional: true

  /@esbuild/darwin-x64@0.19.12:
    resolution: {integrity: sha512-hKoVkKzFiToTgn+41qGhsUJXFlIjxI/jSYeZf3ugemDYZldIXIxhvwN6erJGlX4t5h417iFuheZ7l+YVn05N3A==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [darwin]
    requiresBuild: true
    dev: true
    optional: true

  /@esbuild/freebsd-arm64@0.19.12:
    resolution: {integrity: sha512-4aRvFIXmwAcDBw9AueDQ2YnGmz5L6obe5kmPT8Vd+/+x/JMVKCgdcRwH6APrbpNXsPz+K653Qg8HB/oXvXVukA==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [freebsd]
    requiresBuild: true
    dev: true
    optional: true

  /@esbuild/freebsd-x64@0.19.12:
    resolution: {integrity: sha512-EYoXZ4d8xtBoVN7CEwWY2IN4ho76xjYXqSXMNccFSx2lgqOG/1TBPW0yPx1bJZk94qu3tX0fycJeeQsKovA8gg==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [freebsd]
    requiresBuild: true
    dev: true
    optional: true

  /@esbuild/linux-arm64@0.19.12:
    resolution: {integrity: sha512-EoTjyYyLuVPfdPLsGVVVC8a0p1BFFvtpQDB/YLEhaXyf/5bczaGeN15QkR+O4S5LeJ92Tqotve7i1jn35qwvdA==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [linux]
    requiresBuild: true
    dev: true
    optional: true

  /@esbuild/linux-arm@0.19.12:
    resolution: {integrity: sha512-J5jPms//KhSNv+LO1S1TX1UWp1ucM6N6XuL6ITdKWElCu8wXP72l9MM0zDTzzeikVyqFE6U8YAV9/tFyj0ti+w==}
    engines: {node: '>=12'}
    cpu: [arm]
    os: [linux]
    requiresBuild: true
    dev: true
    optional: true

  /@esbuild/linux-ia32@0.19.12:
    resolution: {integrity: sha512-Thsa42rrP1+UIGaWz47uydHSBOgTUnwBwNq59khgIwktK6x60Hivfbux9iNR0eHCHzOLjLMLfUMLCypBkZXMHA==}
    engines: {node: '>=12'}
    cpu: [ia32]
    os: [linux]
    requiresBuild: true
    dev: true
    optional: true

  /@esbuild/linux-loong64@0.19.12:
    resolution: {integrity: sha512-LiXdXA0s3IqRRjm6rV6XaWATScKAXjI4R4LoDlvO7+yQqFdlr1Bax62sRwkVvRIrwXxvtYEHHI4dm50jAXkuAA==}
    engines: {node: '>=12'}
    cpu: [loong64]
    os: [linux]
    requiresBuild: true
    dev: true
    optional: true

  /@esbuild/linux-mips64el@0.19.12:
    resolution: {integrity: sha512-fEnAuj5VGTanfJ07ff0gOA6IPsvrVHLVb6Lyd1g2/ed67oU1eFzL0r9WL7ZzscD+/N6i3dWumGE1Un4f7Amf+w==}
    engines: {node: '>=12'}
    cpu: [mips64el]
    os: [linux]
    requiresBuild: true
    dev: true
    optional: true

  /@esbuild/linux-ppc64@0.19.12:
    resolution: {integrity: sha512-nYJA2/QPimDQOh1rKWedNOe3Gfc8PabU7HT3iXWtNUbRzXS9+vgB0Fjaqr//XNbd82mCxHzik2qotuI89cfixg==}
    engines: {node: '>=12'}
    cpu: [ppc64]
    os: [linux]
    requiresBuild: true
    dev: true
    optional: true

  /@esbuild/linux-riscv64@0.19.12:
    resolution: {integrity: sha512-2MueBrlPQCw5dVJJpQdUYgeqIzDQgw3QtiAHUC4RBz9FXPrskyyU3VI1hw7C0BSKB9OduwSJ79FTCqtGMWqJHg==}
    engines: {node: '>=12'}
    cpu: [riscv64]
    os: [linux]
    requiresBuild: true
    dev: true
    optional: true

  /@esbuild/linux-s390x@0.19.12:
    resolution: {integrity: sha512-+Pil1Nv3Umes4m3AZKqA2anfhJiVmNCYkPchwFJNEJN5QxmTs1uzyy4TvmDrCRNT2ApwSari7ZIgrPeUx4UZDg==}
    engines: {node: '>=12'}
    cpu: [s390x]
    os: [linux]
    requiresBuild: true
    dev: true
    optional: true

  /@esbuild/linux-x64@0.19.12:
    resolution: {integrity: sha512-B71g1QpxfwBvNrfyJdVDexenDIt1CiDN1TIXLbhOw0KhJzE78KIFGX6OJ9MrtC0oOqMWf+0xop4qEU8JrJTwCg==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [linux]
    requiresBuild: true
    dev: true
    optional: true

  /@esbuild/netbsd-x64@0.19.12:
    resolution: {integrity: sha512-3ltjQ7n1owJgFbuC61Oj++XhtzmymoCihNFgT84UAmJnxJfm4sYCiSLTXZtE00VWYpPMYc+ZQmB6xbSdVh0JWA==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [netbsd]
    requiresBuild: true
    dev: true
    optional: true

  /@esbuild/openbsd-x64@0.19.12:
    resolution: {integrity: sha512-RbrfTB9SWsr0kWmb9srfF+L933uMDdu9BIzdA7os2t0TXhCRjrQyCeOt6wVxr79CKD4c+p+YhCj31HBkYcXebw==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [openbsd]
    requiresBuild: true
    dev: true
    optional: true

  /@esbuild/sunos-x64@0.19.12:
    resolution: {integrity: sha512-HKjJwRrW8uWtCQnQOz9qcU3mUZhTUQvi56Q8DPTLLB+DawoiQdjsYq+j+D3s9I8VFtDr+F9CjgXKKC4ss89IeA==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [sunos]
    requiresBuild: true
    dev: true
    optional: true

  /@esbuild/win32-arm64@0.19.12:
    resolution: {integrity: sha512-URgtR1dJnmGvX864pn1B2YUYNzjmXkuJOIqG2HdU62MVS4EHpU2946OZoTMnRUHklGtJdJZ33QfzdjGACXhn1A==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [win32]
    requiresBuild: true
    dev: true
    optional: true

  /@esbuild/win32-ia32@0.19.12:
    resolution: {integrity: sha512-+ZOE6pUkMOJfmxmBZElNOx72NKpIa/HFOMGzu8fqzQJ5kgf6aTGrcJaFsNiVMH4JKpMipyK+7k0n2UXN7a8YKQ==}
    engines: {node: '>=12'}
    cpu: [ia32]
    os: [win32]
    requiresBuild: true
    dev: true
    optional: true

  /@esbuild/win32-x64@0.19.12:
    resolution: {integrity: sha512-T1QyPSDCyMXaO3pzBkF96E8xMkiRYbUEZADd29SyPGabqxMViNoii+NcK7eWJAEoU6RZyEm5lVSIjTmcdoB9HA==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [win32]
    requiresBuild: true
    dev: true
    optional: true

  /@jest/schemas@29.6.3:
    resolution: {integrity: sha512-mo5j5X+jIZmJQveBKeS/clAueipV7KgiX1vMgCxam1RNYiqE1w62n0/tJJnHtjW8ZHcQco5gY85jA3mi0L+nSA==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}
    dependencies:
      '@sinclair/typebox': 0.27.8
    dev: true

  /@jridgewell/sourcemap-codec@1.4.15:
    resolution: {integrity: sha512-eF2rxCRulEKXHTRiDrDy6erMYWqNw4LPdQ8UQA4huuxaQsVeRPFl2oM8oDGxMFhJUWZf9McpLtJasDDZb/Bpeg==}
    dev: true

  /@nodelib/fs.scandir@2.1.5:
    resolution: {integrity: sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==}
    engines: {node: '>= 8'}
    dependencies:
      '@nodelib/fs.stat': 2.0.5
      run-parallel: 1.2.0
    dev: true

  /@nodelib/fs.stat@2.0.5:
    resolution: {integrity: sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==}
    engines: {node: '>= 8'}
    dev: true

  /@nodelib/fs.walk@1.2.8:
    resolution: {integrity: sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==}
    engines: {node: '>= 8'}
    dependencies:
      '@nodelib/fs.scandir': 2.1.5
      fastq: 1.17.1
    dev: true

  /@polka/url@1.0.0-next.25:
    resolution: {integrity: sha512-j7P6Rgr3mmtdkeDGTe0E/aYyWEWVtc5yFXtHCRHs28/jptDEWfaVOc5T7cblqy1XKPPfCxJc/8DwQ5YgLOZOVQ==}
    dev: true

  /@rollup/rollup-android-arm-eabi@4.13.0:
    resolution: {integrity: sha512-5ZYPOuaAqEH/W3gYsRkxQATBW3Ii1MfaT4EQstTnLKViLi2gLSQmlmtTpGucNP3sXEpOiI5tdGhjdE111ekyEg==}
    cpu: [arm]
    os: [android]
    requiresBuild: true
    dev: true
    optional: true

  /@rollup/rollup-android-arm64@4.13.0:
    resolution: {integrity: sha512-BSbaCmn8ZadK3UAQdlauSvtaJjhlDEjS5hEVVIN3A4bbl3X+otyf/kOJV08bYiRxfejP3DXFzO2jz3G20107+Q==}
    cpu: [arm64]
    os: [android]
    requiresBuild: true
    dev: true
    optional: true

  /@rollup/rollup-darwin-arm64@4.13.0:
    resolution: {integrity: sha512-Ovf2evVaP6sW5Ut0GHyUSOqA6tVKfrTHddtmxGQc1CTQa1Cw3/KMCDEEICZBbyppcwnhMwcDce9ZRxdWRpVd6g==}
    cpu: [arm64]
    os: [darwin]
    requiresBuild: true
    dev: true
    optional: true

  /@rollup/rollup-darwin-x64@4.13.0:
    resolution: {integrity: sha512-U+Jcxm89UTK592vZ2J9st9ajRv/hrwHdnvyuJpa5A2ngGSVHypigidkQJP+YiGL6JODiUeMzkqQzbCG3At81Gg==}
    cpu: [x64]
    os: [darwin]
    requiresBuild: true
    dev: true
    optional: true

  /@rollup/rollup-linux-arm-gnueabihf@4.13.0:
    resolution: {integrity: sha512-8wZidaUJUTIR5T4vRS22VkSMOVooG0F4N+JSwQXWSRiC6yfEsFMLTYRFHvby5mFFuExHa/yAp9juSphQQJAijQ==}
    cpu: [arm]
    os: [linux]
    requiresBuild: true
    dev: true
    optional: true

  /@rollup/rollup-linux-arm64-gnu@4.13.0:
    resolution: {integrity: sha512-Iu0Kno1vrD7zHQDxOmvweqLkAzjxEVqNhUIXBsZ8hu8Oak7/5VTPrxOEZXYC1nmrBVJp0ZcL2E7lSuuOVaE3+w==}
    cpu: [arm64]
    os: [linux]
    requiresBuild: true
    dev: true
    optional: true

  /@rollup/rollup-linux-arm64-musl@4.13.0:
    resolution: {integrity: sha512-C31QrW47llgVyrRjIwiOwsHFcaIwmkKi3PCroQY5aVq4H0A5v/vVVAtFsI1nfBngtoRpeREvZOkIhmRwUKkAdw==}
    cpu: [arm64]
    os: [linux]
    requiresBuild: true
    dev: true
    optional: true

  /@rollup/rollup-linux-riscv64-gnu@4.13.0:
    resolution: {integrity: sha512-Oq90dtMHvthFOPMl7pt7KmxzX7E71AfyIhh+cPhLY9oko97Zf2C9tt/XJD4RgxhaGeAraAXDtqxvKE1y/j35lA==}
    cpu: [riscv64]
    os: [linux]
    requiresBuild: true
    dev: true
    optional: true

  /@rollup/rollup-linux-x64-gnu@4.13.0:
    resolution: {integrity: sha512-yUD/8wMffnTKuiIsl6xU+4IA8UNhQ/f1sAnQebmE/lyQ8abjsVyDkyRkWop0kdMhKMprpNIhPmYlCxgHrPoXoA==}
    cpu: [x64]
    os: [linux]
    requiresBuild: true
    dev: true
    optional: true

  /@rollup/rollup-linux-x64-musl@4.13.0:
    resolution: {integrity: sha512-9RyNqoFNdF0vu/qqX63fKotBh43fJQeYC98hCaf89DYQpv+xu0D8QFSOS0biA7cGuqJFOc1bJ+m2rhhsKcw1hw==}
    cpu: [x64]
    os: [linux]
    requiresBuild: true
    dev: true
    optional: true

  /@rollup/rollup-win32-arm64-msvc@4.13.0:
    resolution: {integrity: sha512-46ue8ymtm/5PUU6pCvjlic0z82qWkxv54GTJZgHrQUuZnVH+tvvSP0LsozIDsCBFO4VjJ13N68wqrKSeScUKdA==}
    cpu: [arm64]
    os: [win32]
    requiresBuild: true
    dev: true
    optional: true

  /@rollup/rollup-win32-ia32-msvc@4.13.0:
    resolution: {integrity: sha512-P5/MqLdLSlqxbeuJ3YDeX37srC8mCflSyTrUsgbU1c/U9j6l2g2GiIdYaGD9QjdMQPMSgYm7hgg0551wHyIluw==}
    cpu: [ia32]
    os: [win32]
    requiresBuild: true
    dev: true
    optional: true

  /@rollup/rollup-win32-x64-msvc@4.13.0:
    resolution: {integrity: sha512-UKXUQNbO3DOhzLRwHSpa0HnhhCgNODvfoPWv2FCXme8N/ANFfhIPMGuOT+QuKd16+B5yxZ0HdpNlqPvTMS1qfw==}
    cpu: [x64]
    os: [win32]
    requiresBuild: true
    dev: true
    optional: true

  /@sinclair/typebox@0.27.8:
    resolution: {integrity: sha512-+Fj43pSMwJs4KRrH/938Uf+uAELIgVBmQzg/q1YG10djyfA3TnrU8N8XzqCh/okZdszqBQTZf96idMfE5lnwTA==}
    dev: true

  /@types/estree@1.0.5:
    resolution: {integrity: sha512-/kYRxGDLWzHOB7q+wtSUQlFrtcdUccpfy+X+9iMBpHK8QLLhx2wIPYuS5DYtR9Wa/YlZAbIovy7qVdB1Aq6Lyw==}
    dev: true

  /@vitest/expect@1.3.1:
    resolution: {integrity: sha512-xofQFwIzfdmLLlHa6ag0dPV8YsnKOCP1KdAeVVh34vSjN2dcUiXYCD9htu/9eM7t8Xln4v03U9HLxLpPlsXdZw==}
    dependencies:
      '@vitest/spy': 1.3.1
      '@vitest/utils': 1.3.1
      chai: 4.4.1
    dev: true

  /@vitest/runner@1.3.1:
    resolution: {integrity: sha512-5FzF9c3jG/z5bgCnjr8j9LNq/9OxV2uEBAITOXfoe3rdZJTdO7jzThth7FXv/6b+kdY65tpRQB7WaKhNZwX+Kg==}
    dependencies:
      '@vitest/utils': 1.3.1
      p-limit: 5.0.0
      pathe: 1.1.2
    dev: true

  /@vitest/snapshot@1.3.1:
    resolution: {integrity: sha512-EF++BZbt6RZmOlE3SuTPu/NfwBF6q4ABS37HHXzs2LUVPBLx2QoY/K0fKpRChSo8eLiuxcbCVfqKgx/dplCDuQ==}
    dependencies:
      magic-string: 0.30.8
      pathe: 1.1.2
      pretty-format: 29.7.0
    dev: true

  /@vitest/spy@1.3.1:
    resolution: {integrity: sha512-xAcW+S099ylC9VLU7eZfdT9myV67Nor9w9zhf0mGCYJSO+zM2839tOeROTdikOi/8Qeusffvxb/MyBSOja1Uig==}
    dependencies:
      tinyspy: 2.2.1
    dev: true

  /@vitest/ui@1.3.0(vitest@1.3.1):
    resolution: {integrity: sha512-2UrFLJ62c/eJGPHcclstMKlAR7E1WB1ITe1isuowEPJJHi3HfqofvsUqQ1cGrEF7kitG1DJuwURUA3HLDtQkXA==}
    peerDependencies:
      vitest: 1.3.1
    dependencies:
      '@vitest/utils': 1.3.1
      fast-glob: 3.3.2
      fflate: 0.8.2
      flatted: 3.3.1
      pathe: 1.1.2
      picocolors: 1.0.0
      sirv: 2.0.4
      vitest: 1.3.1(@vitest/ui@1.3.0)
    dev: true

  /@vitest/utils@1.3.1:
    resolution: {integrity: sha512-d3Waie/299qqRyHTm2DjADeTaNdNSVsnwHPWrs20JMpjh6eiVq7ggggweO8rc4arhf6rRkWuHKwvxGvejUXZZQ==}
    dependencies:
      diff-sequences: 29.6.3
      estree-walker: 3.0.3
      loupe: 2.3.7
      pretty-format: 29.7.0
    dev: true

  /acorn-walk@8.3.2:
    resolution: {integrity: sha512-cjkyv4OtNCIeqhHrfS81QWXoCBPExR/J62oyEqepVw8WaQeSqpW2uhuLPh1m9eWhDuOo/jUXVTlifvesOWp/4A==}
    engines: {node: '>=0.4.0'}
    dev: true

  /acorn@8.11.3:
    resolution: {integrity: sha512-Y9rRfJG5jcKOE0CLisYbojUjIrIEE7AGMzA/Sm4BslANhbS+cDMpgBdcPT91oJ7OuJ9hYJBx59RjbhxVnrF8Xg==}
    engines: {node: '>=0.4.0'}
    hasBin: true
    dev: true

  /ansi-styles@5.2.0:
    resolution: {integrity: sha512-Cxwpt2SfTzTtXcfOlzGEee8O+c+MmUgGrNiBcXnuWxuFJHe6a5Hz7qwhwe5OgaSYI0IJvkLqWX1ASG+cJOkEiA==}
    engines: {node: '>=10'}
    dev: true

  /assertion-error@1.1.0:
    resolution: {integrity: sha512-jgsaNduz+ndvGyFt3uSuWqvy4lCnIJiovtouQN5JZHOKCS2QuhEdbcQHFhVksz2N2U9hXJo8odG7ETyWlEeuDw==}
    dev: true

  /braces@3.0.2:
    resolution: {integrity: sha512-b8um+L1RzM3WDSzvhm6gIz1yfTbBt6YTlcEKAvsmqCZZFw46z626lVj9j1yEPW33H5H+lBQpZMP1k8l+78Ha0A==}
    engines: {node: '>=8'}
    dependencies:
      fill-range: 7.0.1
    dev: true

  /cac@6.7.14:
    resolution: {integrity: sha512-b6Ilus+c3RrdDk+JhLKUAQfzzgLEPy6wcXqS7f/xe1EETvsDP6GORG7SFuOs6cID5YkqchW/LXZbX5bc8j7ZcQ==}
    engines: {node: '>=8'}
    dev: true

  /chai@4.4.1:
    resolution: {integrity: sha512-13sOfMv2+DWduEU+/xbun3LScLoqN17nBeTLUsmDfKdoiC1fr0n9PU4guu4AhRcOVFk/sW8LyZWHuhWtQZiF+g==}
    engines: {node: '>=4'}
    dependencies:
      assertion-error: 1.1.0
      check-error: 1.0.3
      deep-eql: 4.1.3
      get-func-name: 2.0.2
      loupe: 2.3.7
      pathval: 1.1.1
      type-detect: 4.0.8
    dev: true

  /check-error@1.0.3:
    resolution: {integrity: sha512-iKEoDYaRmd1mxM90a2OEfWhjsjPpYPuQ+lMYsoxB126+t8fw7ySEO48nmDg5COTjxDI65/Y2OWpeEHk3ZOe8zg==}
    dependencies:
      get-func-name: 2.0.2
    dev: true

  /cross-spawn@7.0.3:
    resolution: {integrity: sha512-iRDPJKUPVEND7dHPO8rkbOnPpyDygcDFtWjpeWNCgy8WP2rXcxXL8TskReQl6OrB2G7+UJrags1q15Fudc7G6w==}
    engines: {node: '>= 8'}
    dependencies:
      path-key: 3.1.1
      shebang-command: 2.0.0
      which: 2.0.2
    dev: true

  /debug@4.3.4:
    resolution: {integrity: sha512-PRWFHuSU3eDtQJPvnNY7Jcket1j0t5OuOsFzPPzsekD52Zl8qUfFIPEiswXqIvHWGVHOgX+7G/vCNNhehwxfkQ==}
    engines: {node: '>=6.0'}
    peerDependencies:
      supports-color: '*'
    peerDependenciesMeta:
      supports-color:
        optional: true
    dependencies:
      ms: 2.1.2
    dev: true

  /deep-eql@4.1.3:
    resolution: {integrity: sha512-WaEtAOpRA1MQ0eohqZjpGD8zdI0Ovsm8mmFhaDN8dvDZzyoUMcYDnf5Y6iu7HTXxf8JDS23qWa4a+hKCDyOPzw==}
    engines: {node: '>=6'}
    dependencies:
      type-detect: 4.0.8
    dev: true

  /diff-sequences@29.6.3:
    resolution: {integrity: sha512-EjePK1srD3P08o2j4f0ExnylqRs5B9tJjcp9t1krH2qRi8CCdsYfwe9JgSLurFBWwq4uOlipzfk5fHNvwFKr8Q==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}
    dev: true

  /esbuild@0.19.12:
    resolution: {integrity: sha512-aARqgq8roFBj054KvQr5f1sFu0D65G+miZRCuJyJ0G13Zwx7vRar5Zhn2tkQNzIXcBrNVsv/8stehpj+GAjgbg==}
    engines: {node: '>=12'}
    hasBin: true
    optionalDependencies:
      '@esbuild/aix-ppc64': 0.19.12
      '@esbuild/android-arm': 0.19.12
      '@esbuild/android-arm64': 0.19.12
      '@esbuild/android-x64': 0.19.12
      '@esbuild/darwin-arm64': 0.19.12
      '@esbuild/darwin-x64': 0.19.12
      '@esbuild/freebsd-arm64': 0.19.12
      '@esbuild/freebsd-x64': 0.19.12
      '@esbuild/linux-arm': 0.19.12
      '@esbuild/linux-arm64': 0.19.12
      '@esbuild/linux-ia32': 0.19.12
      '@esbuild/linux-loong64': 0.19.12
      '@esbuild/linux-mips64el': 0.19.12
      '@esbuild/linux-ppc64': 0.19.12
      '@esbuild/linux-riscv64': 0.19.12
      '@esbuild/linux-s390x': 0.19.12
      '@esbuild/linux-x64': 0.19.12
      '@esbuild/netbsd-x64': 0.19.12
      '@esbuild/openbsd-x64': 0.19.12
      '@esbuild/sunos-x64': 0.19.12
      '@esbuild/win32-arm64': 0.19.12
      '@esbuild/win32-ia32': 0.19.12
      '@esbuild/win32-x64': 0.19.12
    dev: true

  /estree-walker@3.0.3:
    resolution: {integrity: sha512-7RUKfXgSMMkzt6ZuXmqapOurLGPPfgj6l9uRZ7lRGolvk0y2yocc35LdcxKC5PQZdn2DMqioAQ2NoWcrTKmm6g==}
    dependencies:
      '@types/estree': 1.0.5
    dev: true

  /execa@8.0.1:
    resolution: {integrity: sha512-VyhnebXciFV2DESc+p6B+y0LjSm0krU4OgJN44qFAhBY0TJ+1V61tYD2+wHusZ6F9n5K+vl8k0sTy7PEfV4qpg==}
    engines: {node: '>=16.17'}
    dependencies:
      cross-spawn: 7.0.3
      get-stream: 8.0.1
      human-signals: 5.0.0
      is-stream: 3.0.0
      merge-stream: 2.0.0
      npm-run-path: 5.3.0
      onetime: 6.0.0
      signal-exit: 4.1.0
      strip-final-newline: 3.0.0
    dev: true

  /fast-glob@3.3.2:
    resolution: {integrity: sha512-oX2ruAFQwf/Orj8m737Y5adxDQO0LAB7/S5MnxCdTNDd4p6BsyIVsv9JQsATbTSq8KHRpLwIHbVlUNatxd+1Ow==}
    engines: {node: '>=8.6.0'}
    dependencies:
      '@nodelib/fs.stat': 2.0.5
      '@nodelib/fs.walk': 1.2.8
      glob-parent: 5.1.2
      merge2: 1.4.1
      micromatch: 4.0.5
    dev: true

  /fastq@1.17.1:
    resolution: {integrity: sha512-sRVD3lWVIXWg6By68ZN7vho9a1pQcN/WBFaAAsDDFzlJjvoGx0P8z7V1t72grFJfJhu3YPZBuu25f7Kaw2jN1w==}
    dependencies:
      reusify: 1.0.4
    dev: true

  /fflate@0.8.2:
    resolution: {integrity: sha512-cPJU47OaAoCbg0pBvzsgpTPhmhqI5eJjh/JIu8tPj5q+T7iLvW/JAYUqmE7KOB4R1ZyEhzBaIQpQpardBF5z8A==}
    dev: true

  /fill-range@7.0.1:
    resolution: {integrity: sha512-qOo9F+dMUmC2Lcb4BbVvnKJxTPjCm+RRpe4gDuGrzkL7mEVl/djYSu2OdQ2Pa302N4oqkSg9ir6jaLWJ2USVpQ==}
    engines: {node: '>=8'}
    dependencies:
      to-regex-range: 5.0.1
    dev: true

  /flatted@3.3.1:
    resolution: {integrity: sha512-X8cqMLLie7KsNUDSdzeN8FYK9rEt4Dt67OsG/DNGnYTSDBG4uFAJFBnUeiV+zCVAvwFy56IjM9sH51jVaEhNxw==}
    dev: true

  /fsevents@2.3.3:
    resolution: {integrity: sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==}
    engines: {node: ^8.16.0 || ^10.6.0 || >=11.0.0}
    os: [darwin]
    requiresBuild: true
    dev: true
    optional: true

  /get-func-name@2.0.2:
    resolution: {integrity: sha512-8vXOvuE167CtIc3OyItco7N/dpRtBbYOsPsXCz7X/PMnlGjYjSGuZJgM1Y7mmew7BKf9BqvLX2tnOVy1BBUsxQ==}
    dev: true

  /get-stream@8.0.1:
    resolution: {integrity: sha512-VaUJspBffn/LMCJVoMvSAdmscJyS1auj5Zulnn5UoYcY531UWmdwhRWkcGKnGU93m5HSXP9LP2usOryrBtQowA==}
    engines: {node: '>=16'}
    dev: true

  /glob-parent@5.1.2:
    resolution: {integrity: sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==}
    engines: {node: '>= 6'}
    dependencies:
      is-glob: 4.0.3
    dev: true

  /human-signals@5.0.0:
    resolution: {integrity: sha512-AXcZb6vzzrFAUE61HnN4mpLqd/cSIwNQjtNWR0euPm6y0iqx3G4gOXaIDdtdDwZmhwe82LA6+zinmW4UBWVePQ==}
    engines: {node: '>=16.17.0'}
    dev: true

  /is-extglob@2.1.1:
    resolution: {integrity: sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==}
    engines: {node: '>=0.10.0'}
    dev: true

  /is-glob@4.0.3:
    resolution: {integrity: sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==}
    engines: {node: '>=0.10.0'}
    dependencies:
      is-extglob: 2.1.1
    dev: true

  /is-number@7.0.0:
    resolution: {integrity: sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==}
    engines: {node: '>=0.12.0'}
    dev: true

  /is-stream@3.0.0:
    resolution: {integrity: sha512-LnQR4bZ9IADDRSkvpqMGvt/tEJWclzklNgSw48V5EAaAeDd6qGvN8ei6k5p0tvxSR171VmGyHuTiAOfxAbr8kA==}
    engines: {node: ^12.20.0 || ^14.13.1 || >=16.0.0}
    dev: true

  /isexe@2.0.0:
    resolution: {integrity: sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==}
    dev: true

  /js-tokens@8.0.3:
    resolution: {integrity: sha512-UfJMcSJc+SEXEl9lH/VLHSZbThQyLpw1vLO1Lb+j4RWDvG3N2f7yj3PVQA3cmkTBNldJ9eFnM+xEXxHIXrYiJw==}
    dev: true

  /jsonc-parser@3.2.1:
    resolution: {integrity: sha512-AilxAyFOAcK5wA1+LeaySVBrHsGQvUFCDWXKpZjzaL0PqW+xfBOttn8GNtWKFWqneyMZj41MWF9Kl6iPWLwgOA==}
    dev: true

  /local-pkg@0.5.0:
    resolution: {integrity: sha512-ok6z3qlYyCDS4ZEU27HaU6x/xZa9Whf8jD4ptH5UZTQYZVYeb9bnZ3ojVhiJNLiXK1Hfc0GNbLXcmZ5plLDDBg==}
    engines: {node: '>=14'}
    dependencies:
      mlly: 1.6.1
      pkg-types: 1.0.3
    dev: true

  /loupe@2.3.7:
    resolution: {integrity: sha512-zSMINGVYkdpYSOBmLi0D1Uo7JU9nVdQKrHxC8eYlV+9YKK9WePqAlL7lSlorG/U2Fw1w0hTBmaa/jrQ3UbPHtA==}
    dependencies:
      get-func-name: 2.0.2
    dev: true

  /magic-string@0.30.8:
    resolution: {integrity: sha512-ISQTe55T2ao7XtlAStud6qwYPZjE4GK1S/BeVPus4jrq6JuOnQ00YKQC581RWhR122W7msZV263KzVeLoqidyQ==}
    engines: {node: '>=12'}
    dependencies:
      '@jridgewell/sourcemap-codec': 1.4.15
    dev: true

  /merge-stream@2.0.0:
    resolution: {integrity: sha512-abv/qOcuPfk3URPfDzmZU1LKmuw8kT+0nIHvKrKgFrwifol/doWcdA4ZqsWQ8ENrFKkd67Mfpo/LovbIUsbt3w==}
    dev: true

  /merge2@1.4.1:
    resolution: {integrity: sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==}
    engines: {node: '>= 8'}
    dev: true

  /micromatch@4.0.5:
    resolution: {integrity: sha512-DMy+ERcEW2q8Z2Po+WNXuw3c5YaUSFjAO5GsJqfEl7UjvtIuFKO6ZrKvcItdy98dwFI2N1tg3zNIdKaQT+aNdA==}
    engines: {node: '>=8.6'}
    dependencies:
      braces: 3.0.2
      picomatch: 2.3.1
    dev: true

  /mimic-fn@4.0.0:
    resolution: {integrity: sha512-vqiC06CuhBTUdZH+RYl8sFrL096vA45Ok5ISO6sE/Mr1jRbGH4Csnhi8f3wKVl7x8mO4Au7Ir9D3Oyv1VYMFJw==}
    engines: {node: '>=12'}
    dev: true

  /mlly@1.6.1:
    resolution: {integrity: sha512-vLgaHvaeunuOXHSmEbZ9izxPx3USsk8KCQ8iC+aTlp5sKRSoZvwhHh5L9VbKSaVC6sJDqbyohIS76E2VmHIPAA==}
    dependencies:
      acorn: 8.11.3
      pathe: 1.1.2
      pkg-types: 1.0.3
      ufo: 1.4.0
    dev: true

  /mrmime@2.0.0:
    resolution: {integrity: sha512-eu38+hdgojoyq63s+yTpN4XMBdt5l8HhMhc4VKLO9KM5caLIBvUm4thi7fFaxyTmCKeNnXZ5pAlBwCUnhA09uw==}
    engines: {node: '>=10'}
    dev: true

  /ms@2.1.2:
    resolution: {integrity: sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==}
    dev: true

  /nanoid@3.3.7:
    resolution: {integrity: sha512-eSRppjcPIatRIMC1U6UngP8XFcz8MQWGQdt1MTBQ7NaAmvXDfvNxbvWV3x2y6CdEUciCSsDHDQZbhYaB8QEo2g==}
    engines: {node: ^10 || ^12 || ^13.7 || ^14 || >=15.0.1}
    hasBin: true
    dev: true

  /npm-run-path@5.3.0:
    resolution: {integrity: sha512-ppwTtiJZq0O/ai0z7yfudtBpWIoxM8yE6nHi1X47eFR2EWORqfbu6CnPlNsjeN683eT0qG6H/Pyf9fCcvjnnnQ==}
    engines: {node: ^12.20.0 || ^14.13.1 || >=16.0.0}
    dependencies:
      path-key: 4.0.0
    dev: true

  /onetime@6.0.0:
    resolution: {integrity: sha512-1FlR+gjXK7X+AsAHso35MnyN5KqGwJRi/31ft6x0M194ht7S+rWAvd7PHss9xSKMzE0asv1pyIHaJYq+BbacAQ==}
    engines: {node: '>=12'}
    dependencies:
      mimic-fn: 4.0.0
    dev: true

  /p-limit@5.0.0:
    resolution: {integrity: sha512-/Eaoq+QyLSiXQ4lyYV23f14mZRQcXnxfHrN0vCai+ak9G0pp9iEQukIIZq5NccEvwRB8PUnZT0KsOoDCINS1qQ==}
    engines: {node: '>=18'}
    dependencies:
      yocto-queue: 1.0.0
    dev: true

  /path-key@3.1.1:
    resolution: {integrity: sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==}
    engines: {node: '>=8'}
    dev: true

  /path-key@4.0.0:
    resolution: {integrity: sha512-haREypq7xkM7ErfgIyA0z+Bj4AGKlMSdlQE2jvJo6huWD1EdkKYV+G/T4nq0YEF2vgTT8kqMFKo1uHn950r4SQ==}
    engines: {node: '>=12'}
    dev: true

  /pathe@1.1.2:
    resolution: {integrity: sha512-whLdWMYL2TwI08hn8/ZqAbrVemu0LNaNNJZX73O6qaIdCTfXutsLhMkjdENX0qhsQ9uIimo4/aQOmXkoon2nDQ==}
    dev: true

  /pathval@1.1.1:
    resolution: {integrity: sha512-Dp6zGqpTdETdR63lehJYPeIOqpiNBNtc7BpWSLrOje7UaIsE5aY92r/AunQA7rsXvet3lrJ3JnZX29UPTKXyKQ==}
    dev: true

  /picocolors@1.0.0:
    resolution: {integrity: sha512-1fygroTLlHu66zi26VoTDv8yRgm0Fccecssto+MhsZ0D/DGW2sm8E8AjW7NU5VVTRt5GxbeZ5qBuJr+HyLYkjQ==}
    dev: true

  /picomatch@2.3.1:
    resolution: {integrity: sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==}
    engines: {node: '>=8.6'}
    dev: true

  /pkg-types@1.0.3:
    resolution: {integrity: sha512-nN7pYi0AQqJnoLPC9eHFQ8AcyaixBUOwvqc5TDnIKCMEE6I0y8P7OKA7fPexsXGCGxQDl/cmrLAp26LhcwxZ4A==}
    dependencies:
      jsonc-parser: 3.2.1
      mlly: 1.6.1
      pathe: 1.1.2
    dev: true

  /postcss@8.4.35:
    resolution: {integrity: sha512-u5U8qYpBCpN13BsiEB0CbR1Hhh4Gc0zLFuedrHJKMctHCHAGrMdG0PRM/KErzAL3CU6/eckEtmHNB3x6e3c0vA==}
    engines: {node: ^10 || ^12 || >=14}
    dependencies:
      nanoid: 3.3.7
      picocolors: 1.0.0
      source-map-js: 1.0.2
    dev: true

  /pretty-format@29.7.0:
    resolution: {integrity: sha512-Pdlw/oPxN+aXdmM9R00JVC9WVFoCLTKJvDVLgmJ+qAffBMxsV85l/Lu7sNx4zSzPyoL2euImuEwHhOXdEgNFZQ==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}
    dependencies:
      '@jest/schemas': 29.6.3
      ansi-styles: 5.2.0
      react-is: 18.2.0
    dev: true

  /queue-microtask@1.2.3:
    resolution: {integrity: sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==}
    dev: true

  /react-is@18.2.0:
    resolution: {integrity: sha512-xWGDIW6x921xtzPkhiULtthJHoJvBbF3q26fzloPCK0hsvxtPVelvftw3zjbHWSkR2km9Z+4uxbDDK/6Zw9B8w==}
    dev: true

  /reusify@1.0.4:
    resolution: {integrity: sha512-U9nH88a3fc/ekCF1l0/UP1IosiuIjyTh7hBvXVMHYgVcfGvt897Xguj2UOLDeI5BG2m7/uwyaLVT6fbtCwTyzw==}
    engines: {iojs: '>=1.0.0', node: '>=0.10.0'}
    dev: true

  /rollup@4.13.0:
    resolution: {integrity: sha512-3YegKemjoQnYKmsBlOHfMLVPPA5xLkQ8MHLLSw/fBrFaVkEayL51DilPpNNLq1exr98F2B1TzrV0FUlN3gWRPg==}
    engines: {node: '>=18.0.0', npm: '>=8.0.0'}
    hasBin: true
    dependencies:
      '@types/estree': 1.0.5
    optionalDependencies:
      '@rollup/rollup-android-arm-eabi': 4.13.0
      '@rollup/rollup-android-arm64': 4.13.0
      '@rollup/rollup-darwin-arm64': 4.13.0
      '@rollup/rollup-darwin-x64': 4.13.0
      '@rollup/rollup-linux-arm-gnueabihf': 4.13.0
      '@rollup/rollup-linux-arm64-gnu': 4.13.0
      '@rollup/rollup-linux-arm64-musl': 4.13.0
      '@rollup/rollup-linux-riscv64-gnu': 4.13.0
      '@rollup/rollup-linux-x64-gnu': 4.13.0
      '@rollup/rollup-linux-x64-musl': 4.13.0
      '@rollup/rollup-win32-arm64-msvc': 4.13.0
      '@rollup/rollup-win32-ia32-msvc': 4.13.0
      '@rollup/rollup-win32-x64-msvc': 4.13.0
      fsevents: 2.3.3
    dev: true

  /run-parallel@1.2.0:
    resolution: {integrity: sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==}
    dependencies:
      queue-microtask: 1.2.3
    dev: true

  /shebang-command@2.0.0:
    resolution: {integrity: sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==}
    engines: {node: '>=8'}
    dependencies:
      shebang-regex: 3.0.0
    dev: true

  /shebang-regex@3.0.0:
    resolution: {integrity: sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==}
    engines: {node: '>=8'}
    dev: true

  /siginfo@2.0.0:
    resolution: {integrity: sha512-ybx0WO1/8bSBLEWXZvEd7gMW3Sn3JFlW3TvX1nREbDLRNQNaeNN8WK0meBwPdAaOI7TtRRRJn/Es1zhrrCHu7g==}
    dev: true

  /signal-exit@4.1.0:
    resolution: {integrity: sha512-bzyZ1e88w9O1iNJbKnOlvYTrWPDl46O1bG0D3XInv+9tkPrxrN8jUUTiFlDkkmKWgn1M6CfIA13SuGqOa9Korw==}
    engines: {node: '>=14'}
    dev: true

  /sirv@2.0.4:
    resolution: {integrity: sha512-94Bdh3cC2PKrbgSOUqTiGPWVZeSiXfKOVZNJniWoqrWrRkB1CJzBU3NEbiTsPcYy1lDsANA/THzS+9WBiy5nfQ==}
    engines: {node: '>= 10'}
    dependencies:
      '@polka/url': 1.0.0-next.25
      mrmime: 2.0.0
      totalist: 3.0.1
    dev: true

  /source-map-js@1.0.2:
    resolution: {integrity: sha512-R0XvVJ9WusLiqTCEiGCmICCMplcCkIwwR11mOSD9CR5u+IXYdiseeEuXCVAjS54zqwkLcPNnmU4OeJ6tUrWhDw==}
    engines: {node: '>=0.10.0'}
    dev: true

  /stackback@0.0.2:
    resolution: {integrity: sha512-1XMJE5fQo1jGH6Y/7ebnwPOBEkIEnT4QF32d5R1+VXdXveM0IBMJt8zfaxX1P3QhVwrYe+576+jkANtSS2mBbw==}
    dev: true

  /std-env@3.7.0:
    resolution: {integrity: sha512-JPbdCEQLj1w5GilpiHAx3qJvFndqybBysA3qUOnznweH4QbNYUsW/ea8QzSrnh0vNsezMMw5bcVool8lM0gwzg==}
    dev: true

  /strip-final-newline@3.0.0:
    resolution: {integrity: sha512-dOESqjYr96iWYylGObzd39EuNTa5VJxyvVAEm5Jnh7KGo75V43Hk1odPQkNDyXNmUR6k+gEiDVXnjB8HJ3crXw==}
    engines: {node: '>=12'}
    dev: true

  /strip-literal@2.0.0:
    resolution: {integrity: sha512-f9vHgsCWBq2ugHAkGMiiYY+AYG0D/cbloKKg0nhaaaSNsujdGIpVXCNsrJpCKr5M0f4aI31mr13UjY6GAuXCKA==}
    dependencies:
      js-tokens: 8.0.3
    dev: true

  /tinybench@2.6.0:
    resolution: {integrity: sha512-N8hW3PG/3aOoZAN5V/NSAEDz0ZixDSSt5b/a05iqtpgfLWMSVuCo7w0k2vVvEjdrIoeGqZzweX2WlyioNIHchA==}
    dev: true

  /tinypool@0.8.2:
    resolution: {integrity: sha512-SUszKYe5wgsxnNOVlBYO6IC+8VGWdVGZWAqUxp3UErNBtptZvWbwyUOyzNL59zigz2rCA92QiL3wvG+JDSdJdQ==}
    engines: {node: '>=14.0.0'}
    dev: true

  /tinyspy@2.2.1:
    resolution: {integrity: sha512-KYad6Vy5VDWV4GH3fjpseMQ/XU2BhIYP7Vzd0LG44qRWm/Yt2WCOTicFdvmgo6gWaqooMQCawTtILVQJupKu7A==}
    engines: {node: '>=14.0.0'}
    dev: true

  /to-regex-range@5.0.1:
    resolution: {integrity: sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==}
    engines: {node: '>=8.0'}
    dependencies:
      is-number: 7.0.0
    dev: true

  /totalist@3.0.1:
    resolution: {integrity: sha512-sf4i37nQ2LBx4m3wB74y+ubopq6W/dIzXg0FDGjsYnZHVa1Da8FH853wlL2gtUhg+xJXjfk3kUZS3BRoQeoQBQ==}
    engines: {node: '>=6'}
    dev: true

  /type-detect@4.0.8:
    resolution: {integrity: sha512-0fr/mIH1dlO+x7TlcMy+bIDqKPsw/70tVyeHW787goQjhmqaZe10uwLujubK9q9Lg6Fiho1KUKDYz0Z7k7g5/g==}
    engines: {node: '>=4'}
    dev: true

  /ufo@1.4.0:
    resolution: {integrity: sha512-Hhy+BhRBleFjpJ2vchUNN40qgkh0366FWJGqVLYBHev0vpHTrXSA0ryT+74UiW6KWsldNurQMKGqCm1M2zBciQ==}
    dev: true

  /vite-node@1.3.1:
    resolution: {integrity: sha512-azbRrqRxlWTJEVbzInZCTchx0X69M/XPTCz4H+TLvlTcR/xH/3hkRqhOakT41fMJCMzXTu4UvegkZiEoJAWvng==}
    engines: {node: ^18.0.0 || >=20.0.0}
    hasBin: true
    dependencies:
      cac: 6.7.14
      debug: 4.3.4
      pathe: 1.1.2
      picocolors: 1.0.0
      vite: 5.1.6
    transitivePeerDependencies:
      - '@types/node'
      - less
      - lightningcss
      - sass
      - stylus
      - sugarss
      - supports-color
      - terser
    dev: true

  /vite@5.1.6:
    resolution: {integrity: sha512-yYIAZs9nVfRJ/AiOLCA91zzhjsHUgMjB+EigzFb6W2XTLO8JixBCKCjvhKZaye+NKYHCrkv3Oh50dH9EdLU2RA==}
    engines: {node: ^18.0.0 || >=20.0.0}
    hasBin: true
    peerDependencies:
      '@types/node': ^18.0.0 || >=20.0.0
      less: '*'
      lightningcss: ^1.21.0
      sass: '*'
      stylus: '*'
      sugarss: '*'
      terser: ^5.4.0
    peerDependenciesMeta:
      '@types/node':
        optional: true
      less:
        optional: true
      lightningcss:
        optional: true
      sass:
        optional: true
      stylus:
        optional: true
      sugarss:
        optional: true
      terser:
        optional: true
    dependencies:
      esbuild: 0.19.12
      postcss: 8.4.35
      rollup: 4.13.0
    optionalDependencies:
      fsevents: 2.3.3
    dev: true

  /vitest@1.3.1(@vitest/ui@1.3.0):
    resolution: {integrity: sha512-/1QJqXs8YbCrfv/GPQ05wAZf2eakUPLPa18vkJAKE7RXOKfVHqMZZ1WlTjiwl6Gcn65M5vpNUB6EFLnEdRdEXQ==}
    engines: {node: ^18.0.0 || >=20.0.0}
    hasBin: true
    peerDependencies:
      '@edge-runtime/vm': '*'
      '@types/node': ^18.0.0 || >=20.0.0
      '@vitest/browser': 1.3.1
      '@vitest/ui': 1.3.0
      happy-dom: '*'
      jsdom: '*'
    peerDependenciesMeta:
      '@edge-runtime/vm':
        optional: true
      '@types/node':
        optional: true
      '@vitest/browser':
        optional: true
      '@vitest/ui':
        optional: true
      happy-dom:
        optional: true
      jsdom:
        optional: true
    dependencies:
      '@vitest/expect': 1.3.1
      '@vitest/runner': 1.3.1
      '@vitest/snapshot': 1.3.1
      '@vitest/spy': 1.3.1
      '@vitest/ui': 1.3.0(vitest@1.3.1)
      '@vitest/utils': 1.3.1
      acorn-walk: 8.3.2
      chai: 4.4.1
      debug: 4.3.4
      execa: 8.0.1
      local-pkg: 0.5.0
      magic-string: 0.30.8
      pathe: 1.1.2
      picocolors: 1.0.0
      std-env: 3.7.0
      strip-literal: 2.0.0
      tinybench: 2.6.0
      tinypool: 0.8.2
      vite: 5.1.6
      vite-node: 1.3.1
      why-is-node-running: 2.2.2
    transitivePeerDependencies:
      - less
      - lightningcss
      - sass
      - stylus
      - sugarss
      - supports-color
      - terser
    dev: true

  /which@2.0.2:
    resolution: {integrity: sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==}
    engines: {node: '>= 8'}
    hasBin: true
    dependencies:
      isexe: 2.0.0
    dev: true

  /why-is-node-running@2.2.2:
    resolution: {integrity: sha512-6tSwToZxTOcotxHeA+qGCq1mVzKR3CwcJGmVcY+QE8SHy6TnpFnh8PAvPNHYr7EcuVeG0QSMxtYCuO1ta/G/oA==}
    engines: {node: '>=8'}
    hasBin: true
    dependencies:
      siginfo: 2.0.0
      stackback: 0.0.2
    dev: true

  /yocto-queue@1.0.0:
    resolution: {integrity: sha512-9bnSc/HEW2uRy67wc+T8UwauLuPJVn28jb+GtJY16iiKWyvmYJRXVT4UamsAEGQfPohgr2q4Tq0sQbQlxTfi1g==}
    engines: {node: '>=12.20'}
    dev: true
`;
