/**************************************************************************************************
 *
 * This file defines various config parameters, used later within the other scripts.
 *
 * In all cases, you'll want to set CERT_PEM and likely PROXY_HOST and PROXY_PORT.
 *
 * Source available at https://github.com/httptoolkit/frida-interception-and-unpinning/
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * SPDX-FileCopyrightText: Tim Perry <tim@httptoolkit.com>
 *
 *************************************************************************************************/

// Put your CA certificate data here in PEM format:
// HTTP-Toolkit 证书
// const CERT_PEM = `-----BEGIN CERTIFICATE-----
// MIIDTzCCAjegAwIBAgIRCuts/PtdgE5Yvwof0mlW/GMwDQYJKoZIhvcNAQELBQAw
// QTEYMBYGA1UEAxMPSFRUUCBUb29sa2l0IENBMQswCQYDVQQGEwJYWDEYMBYGA1UE
// ChMPSFRUUCBUb29sa2l0IENBMB4XDTI1MDExNjExMjkzMFoXDTI2MDExNzExMjkz
// MFowQTEYMBYGA1UEAxMPSFRUUCBUb29sa2l0IENBMQswCQYDVQQGEwJYWDEYMBYG
// A1UEChMPSFRUUCBUb29sa2l0IENBMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIB
// CgKCAQEAol8x6R8xgwuCveUXP0Bfxe5ao0cedAGSczC0xeN5qUW900d/ddie1JP1
// EVNu/b31TR+T+Hgmxw84ug60Q5StDVXFv5n/qpAI3Y/kJ61KwyS2jz7Bkcwe/lcm
// A+/+a8abIDzvZPV9wxl5J3uRd+d278zo73OR632CYbm2DdHO/rOAWpbD+qsWKc9s
// FPh7UQasJ9a4JycShUauXpdHcDO5Xjbpn4ordXR45CxAMo33DJLpOv6y1ayhM1LZ
// UC1gnYxoF3fZDMhXVxvc8WnoLgxH9JKnTe1jeZcyCGBKEmhRExTK9w1V37UkRJ0M
// QNfiNMBrJIVP2lB+gjTdR/XL0e+/qwIDAQABo0IwQDAPBgNVHRMBAf8EBTADAQH/
// MA4GA1UdDwEB/wQEAwIBxjAdBgNVHQ4EFgQU308UsLGjYVZy7cX84W4lV0UQaIIw
// DQYJKoZIhvcNAQELBQADggEBAEIvKo00MCx+N1kLogYkDxIL1BvlmtQvEyCYlrDi
// ovo+/5Olqa2cIlYCc6hPbhFEET9JBZI5hzs17Pmrfj3xETiuH7EJ9seMYGp4WwAg
// A7EjpDXJyu1lZ47Ky2DoknWi63RZxG/2dYlISjfh7fD1U547a0X5vB+zec9DC6lB
// q0Eg7BMIC4neL3CYM8Nhdheh6Lk50HtFT+ZTOKiahPslEecY/FDnSKPIDwlCFqhw
// KVHbrg6JR8WBYQ+WOhDjzCbkClc7wvEw1ms0SEZV/Gjv86BDjU9H95uXNgzfd0oS
// DX1TFnBf9yduJ1JhhSWAnDC59ur3HtL0zt0oxsg/nEykJb4=
// -----END CERTIFICATE-----`;

// notice: mitmproxy 的证书 需要禁用掉 ./native-tls-hook.js 才能抓包
// const CERT_PEM = `-----BEGIN CERTIFICATE-----
// MIIDNTCCAh2gAwIBAgIUJ9gUDwD4aaCSV/NIQqKf8Pe+6VYwDQYJKoZIhvcNAQEL
// BQAwKDESMBAGA1UEAwwJbWl0bXByb3h5MRIwEAYDVQQKDAltaXRtcHJveHkwHhcN
// MjUwMzA1MTM1OTQ3WhcNMzUwMzA1MTM1OTQ3WjAoMRIwEAYDVQQDDAltaXRtcHJv
// eHkxEjAQBgNVBAoMCW1pdG1wcm94eTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCC
// AQoCggEBAKkuNPZQG5JkkTprJ7uOS8MQ2unfxEPf5/2SxBKa4p1Eyrx1JtZ7GOka
// UxQdNyABzdUipfdY8OGta267KsmGxfYlMySeXiba7I4bAg64LWo/fKQFiyA3xmSB
// Dw8iBMk7gXKjpRZ11pOOmvmVPq00k+AtoRfBSj+D+IRU62G7cublXbqaxLahd+mG
// SmvX+lk9qcDvw5pWAl0a4SS40cNxsWSSM38JWwCphHJkvTfrnCQ5J37T21LoY3KF
// 3WnzlcO48qzk8ae8pZKkWC1poIWMMYOdf223k4R5AULPG23FlTkF1zJ2CAt19kgZ
// HZJKQIJ6dZhFEFX5fpeke/c3CHphOJcCAwEAAaNXMFUwDwYDVR0TAQH/BAUwAwEB
// /zATBgNVHSUEDDAKBggrBgEFBQcDATAOBgNVHQ8BAf8EBAMCAQYwHQYDVR0OBBYE
// FKqZulAn0V1K4vROoTQSO5gj50nCMA0GCSqGSIb3DQEBCwUAA4IBAQAJBjEDL53t
// dvSZQIEjQwpD9l+8cvqcIYYUPjktLLk6hSAMgqKlDAq5ELGeZYWIPhYe8kFKQ2Vg
// WLq3j4NylJOHfGCrSTmMU+/QisCB8HnmDVPdWirG0Mym23fk3h1gN43MOXbY+KLt
// oswp73jWuchCgctxC+L31ARUFTzwmxWfN6y4aIEDP8v+U79JxvmmESVV73jdSEZZ
// LtZrKSGJq4zxrg5JI621wd8L/g4XgPotcQBx8ujgoJfCQNG/6kYBxJXLgEAm0fWy
// cY9e7QzP0AuEjKFD+ZuBr4/xoj266k9Hu0PjjmmUbGdO0bE/jv8LFn/jMXovXFDN
// CeOuw0nZ5hcC
// -----END CERTIFICATE-----`;

// ProxyMan 证书
const CERT_PEM = `-----BEGIN CERTIFICATE-----
MIIFYzCCBEugAwIBAgIJANNpWX7kjYhSMA0GCSqGSIb3DQEBCwUAMIGcMQswCQYD
VQQGEwJVUzETMBEGA1UEBwwKV2lsbWluZ3RvbjEVMBMGA1UECgwMUHJveHltYW4g
TExDMTAwLgYDVQQDDCdQcm94eW1hbiBDQSAoMjIgSmFuIDIwMjUsIGFzaC1tMi5s
b2NhbCkxHDAaBgNVBAsME2h0dHBzOi8vcHJveHltYW4uaW8xETAPBgNVBAgMCERl
bGF3YXJlMB4XDTI1MDEyMjEwMjgwMVoXDTI3MDQyNzEwMjgwMVowgZwxCzAJBgNV
BAYTAlVTMRMwEQYDVQQHDApXaWxtaW5ndG9uMRUwEwYDVQQKDAxQcm94eW1hbiBM
TEMxMDAuBgNVBAMMJ1Byb3h5bWFuIENBICgyMiBKYW4gMjAyNSwgYXNoLW0yLmxv
Y2FsKTEcMBoGA1UECwwTaHR0cHM6Ly9wcm94eW1hbi5pbzERMA8GA1UECAwIRGVs
YXdhcmUwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDPEl5oMEHF4cSF
XAdrjVlovzcc626SX+cU+P/UDcx/t4tgn5qt+fFEMwdstjYb1Vpxv3WEmK9KK+9n
6zKv1+4fPyhkNoLhlTDWqBA0YPho4T8zLdlKHiR53nJbnX4EGhVqkJkSt67J//JW
M/ktpRVIBDKJg1xi+FXO7briZTamIv9aN6VED3iTeqc3Iu6uEWfVXguX7vyKxAVU
YnJZ+Ki6o32knO79e1KzUPPaWaMVYzTo3QgMUTHS1EeFLUoB6TNzHPkirKz8S0DM
Ba1TAXXtIW2Gkgjw3XP+VQ5uq5+Iio6mEsJ1hWKdW0rEazgpOa0VUDTBWg2pHNLS
uott/gMtAgMBAAGjggGkMIIBoDAdBgNVHQ4EFgQUzPPJ50cgs50oaO6A2deAELYG
TJcwHwYDVR0jBBgwFoAUzPPJ50cgs50oaO6A2deAELYGTJcwDwYDVR0TAQH/BAUw
AwEB/zAOBgNVHQ8BAf8EBAMCAgQwggEcBglghkgBhvhCAQ0EggENFoIBCVRoaXMg
Um9vdCBjZXJ0aWZpY2F0ZSB3YXMgbG9jYWxseSBnZW5lcmF0ZWQgYnkgUHJveHlt
YW4gZm9yIFNTTCBQcm94eWluZy4gSWYgeW91IGFyZSBicm93c2luZyBhIHdlYnNp
dGUgdGhyb3VnaCBQcm94eW1hbiB3aXRoIFNTTCBQcm94eWluZyBlbmFibGVkLCB5
b3Ugd291bGQgc2VlIHRoaXMgY2VydGlmaWNhdGUgYXMgYSBwYXJ0IG9mIGEgY2Vy
dGlmaWNhdGUgY2hhaW4uIFBsZWFzZSBzZWUgaHR0cHM6Ly9wcm94eW1hbi5pbyBm
b3IgbW9yZSBpbmZvcm1hdGlvbi4wHQYDVR0lBBYwFAYIKwYBBQUHAwEGCCsGAQUF
BwMCMA0GCSqGSIb3DQEBCwUAA4IBAQCwgU2wqsmAiTBYMZIKMYMsT4Iz/0J6iCkM
0k8vipdRUN9yQNOyzf66yrAsEzzix3wI3JYzwOWt2haSqPQ5qTBPq2FpeWuBtwjo
nB9y0t88Fz76QfxbTLLRRkOXNhQWAvKy46FIP36IoSNLOnAlujU/wmxk6QKcp9Sf
BbqoItgJboSCHaq8T+QDuEuRKNqDcKuDb4o/CG+4L1FjMlMRslo7IRAe07rWN+KV
YZx4UFfSrkvXauiudTGzKJ4W30Zn8MFagTS2zg6EVgZnI4Jsv2Lvd4Gj0Wd0nPL8
RZZC/PfksJ7mOyMNY99otUNXRHSEAkTI9z+vOpjzB2EVbAzqlvN7
-----END CERTIFICATE-----`;

// Put your intercepting proxy's address here:
const PROXY_HOST = "192.168.0.239";
const PROXY_PORT = 9090;

// If you like, set to to true to enable extra logging:
const DEBUG_MODE = false;
const timeout = 200;

// If you find issues with non-HTTP traffic being captured (due to the
// native connect hook script) you can add ports here to exempt traffic
// on that port from being redirected. Note that this will only affect
// traffic captured by the raw connection hook - for apps using the
// system HTTP proxy settings, traffic on these ports will still be
// sent via the proxy and intercepted despite this setting.
const IGNORED_NON_HTTP_PORTS = [];

// ----------------------------------------------------------------------------
// You don't need to modify any of the below, it just checks and applies some
// of the configuration that you've entered above.
// ----------------------------------------------------------------------------

const start = () => {
  if (DEBUG_MODE) {
    // Add logging just for clean output & to separate reloads:
    console.log("\n*** Starting scripts ***");
    if (Java.available) {
      Java.perform(() => {
        setTimeout(() => console.log("*** Scripts completed ***\n"), 5);
        // (We assume that nothing else will take more than 5ms, but app startup
        // probably will, so this should separate script & runtime logs)
      });
    } else {
      setTimeout(() => console.log("*** Scripts completed ***\n"), 5);
      // (We assume that nothing else will take more than 5ms, but app startup
      // probably will, so this should separate script & runtime logs)
    }
  } else {
    console.log(""); // Add just a single newline, for minimal clarity
  }
};

setTimeout(start, timeout);

// Check the certificate (without literally including the instruction phrasing
// here, as that can be confusing for some users):
if (CERT_PEM.match(/\[!!.* CA certificate data .* !!\]/)) {
  throw new Error(
    "No certificate was provided" +
      "\n\n" +
      "You need to set CERT_PEM in the Frida config script " +
      "to the contents of your CA certificate."
  );
}

// ----------------------------------------------------------------------------
// Don't modify any of the below unless you know what you're doing!
// This section defines various utilities & calculates some constants which may
// be used by later scripts elsewhere in this project.
// ----------------------------------------------------------------------------

// As web atob & Node.js Buffer aren't available, we need to reimplement base64 decoding
// in pure JS. This is a quick rough implementation without much error handling etc!

// Base64 character set (plus padding character =) and lookup:
const BASE64_CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
const BASE64_LOOKUP = new Uint8Array(123);
for (let i = 0; i < BASE64_CHARS.length; i++) {
  BASE64_LOOKUP[BASE64_CHARS.charCodeAt(i)] = i;
}

/**
 * Take a base64 string, and return the raw bytes
 * @param {string} input
 * @returns Uint8Array
 */
function decodeBase64(input) {
  // Calculate the length of the output buffer based on padding:
  let outputLength = Math.floor((input.length * 3) / 4);
  if (input[input.length - 1] === "=") outputLength--;
  if (input[input.length - 2] === "=") outputLength--;

  const output = new Uint8Array(outputLength);
  let outputPos = 0;

  // Process each 4-character block:
  for (let i = 0; i < input.length; i += 4) {
    const a = BASE64_LOOKUP[input.charCodeAt(i)];
    const b = BASE64_LOOKUP[input.charCodeAt(i + 1)];
    const c = BASE64_LOOKUP[input.charCodeAt(i + 2)];
    const d = BASE64_LOOKUP[input.charCodeAt(i + 3)];

    // Assemble into 3 bytes:
    const chunk = (a << 18) | (b << 12) | (c << 6) | d;

    // Add each byte to the output buffer, unless it's padding:
    output[outputPos++] = (chunk >> 16) & 0xff;
    if (input.charCodeAt(i + 2) !== 61)
      output[outputPos++] = (chunk >> 8) & 0xff;
    if (input.charCodeAt(i + 3) !== 61) output[outputPos++] = chunk & 0xff;
  }

  return output;
}

/**
 * Take a single-certificate PEM string, and return the raw DER bytes
 * @param {string} input
 * @returns Uint8Array
 */
function pemToDer(input) {
  const pemLines = input.split("\n");
  if (
    pemLines[0] !== "-----BEGIN CERTIFICATE-----" ||
    pemLines[pemLines.length - 1] !== "-----END CERTIFICATE-----"
  ) {
    throw new Error(
      "Your certificate should be in PEM format, starting & ending " +
        "with a BEGIN CERTIFICATE & END CERTIFICATE header/footer"
    );
  }

  const base64Data = pemLines
    .slice(1, -1)
    .map((l) => l.trim())
    .join("");
  if ([...base64Data].some((c) => !BASE64_CHARS.includes(c))) {
    throw new Error(
      "Your certificate should be in PEM format, containing only " +
        "base64 data between a BEGIN & END CERTIFICATE header/footer"
    );
  }

  return decodeBase64(base64Data);
}

const CERT_DER = pemToDer(CERT_PEM);

function waitForModule(moduleName, callback) {
  if (Array.isArray(moduleName)) {
    moduleName.forEach((module) => waitForModule(module, callback));
  }

  try {
    Module.ensureInitialized(moduleName);
    callback(moduleName);
    return;
  } catch (e) {
    try {
      Module.load(moduleName);
      callback(moduleName);
      return;
    } catch (e) {}
  }

  MODULE_LOAD_CALLBACKS[moduleName] = callback;
}

const getModuleName = (nameOrPath) => {
  const endOfPath = nameOrPath.lastIndexOf("/");
  return nameOrPath.slice(endOfPath + 1);
};

const MODULE_LOAD_CALLBACKS = {};
new ApiResolver("module")
  .enumerateMatches("exports:linker*!*dlopen*")
  .forEach((dlopen) => {
    Interceptor.attach(dlopen.address, {
      onEnter(args) {
        const moduleArg = args[0].readCString();
        if (moduleArg) {
          this.moduleName = getModuleName(moduleArg);
        }
      },
      onLeave() {
        if (!this.moduleName) return;

        Object.keys(MODULE_LOAD_CALLBACKS).forEach((key) => {
          if (this.moduleName === key) {
            MODULE_LOAD_CALLBACKS[key](this.moduleName);
            delete MODULE_LOAD_CALLBACKS[key];
          }
        });
      },
    });
  });
