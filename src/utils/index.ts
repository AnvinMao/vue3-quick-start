export const zeroPad = (num: number) : string => (num < 10 ? `0${num}` : `${num}`)

export const shortAccount = (account: string): string => {
  if (!account || account.length <= 8) {
    return account
  }
  
  return account.substring(0, 3) + '...' + account.substring(account.length - 2)
}

export const formatDate = (date: Date | number): string => {
  if (typeof date === 'number') {
    date = new Date(date * 1000);
  }

  const y: number = date.getFullYear()
  const m: number = date.getMonth() + 1
  const d: number = date.getDate()
  return `${y}/${zeroPad(m)}/${zeroPad(d)} ${zeroPad(date.getHours())}:${zeroPad(date.getMinutes())}:${date.getMinutes()}`
}

export const amountFormat = (amount: number): number => Math.floor((+amount || 0) * 10000) / 10000

export const toThousandFormat = (amount: number): string => {
  return (+amount || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}

export const validateEmail = (email: string): boolean => {
  const re: RegExp = /^[\w.]+@(?:[a-z0-9]+(?:-[a-z0-9]+)*\.)+[a-z]{2,3}$/
  return re.test(email)
}

export const validateMobile = (mobile?: string): boolean => {
  if (!mobile) {
    return false;
  }
  
  const re: RegExp = /^((\+|00)\d{0,2})?\d{6,14}$/
  return re.test(mobile)
}

export const validateName = (name: string): boolean => name.length >= 3 && name.length <= 18

export const validatePassword = (pwd: string): boolean => pwd.length >= 6 && pwd.length <= 22
