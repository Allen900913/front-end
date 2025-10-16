
function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    let password = "";

    let useRef = "";
    useRef += includeLowercase ? "abcdefghijklmnopqrstuvwxyz" : "";
    useRef += includeUppercase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
    useRef += includeNumbers ? "0123456789" : "";
    useRef += includeSymbols ? "!@#$%^&*()_+~`|}{[]:;?><,./-=" : "";

    for (let i = 0; i < length; i++) {
        let idx = Math.floor(Math.random() * useRef.length);
        password += useRef[idx];
    }

  return `password: {${password}}`;
}


const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = false;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);

console.log("🔐 產生的密碼是:", password);
