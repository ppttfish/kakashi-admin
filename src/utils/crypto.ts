import CryptoJS from 'crypto-js'

import { KEY, IV } from '@/constants/index'

export function Encrypt(word: string) {
  if (!word) return ''
  return CryptoJS.AES.encrypt(word, CryptoJS.enc.Utf8.parse(KEY), {
    iv: CryptoJS.enc.Utf8.parse(IV),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  }).toString()
}
export function Decrypt(word: string) {
  console.log('word', word)
  const bytes = CryptoJS.AES.decrypt(word, CryptoJS.enc.Utf8.parse(KEY), {
    iv: CryptoJS.enc.Utf8.parse(IV),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  })
  const originalText = bytes.toString(CryptoJS.enc.Utf8)
  return originalText
}
