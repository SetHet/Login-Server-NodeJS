import { generateKeyPairSync } from 'crypto';
import { join } from 'path';
import { writeFileSync } from 'fs';
//import { passphrase } from './config';

const { publicKey, privateKey } = generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
        type: 'spki',
        format: 'pem'
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
        cipher: 'aes-256-cbc',
        passphrase: ''
    }
});
writeFileSync(join('src','keys', '.private.key'), privateKey);
writeFileSync(join('src','keys', '.public.key.pem'), publicKey);