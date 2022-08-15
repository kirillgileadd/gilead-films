export const API_URL = `${process.env.APP_URL}/api`

export const getGenresUrl = (string: string) => `/genres${string}`
export const getMoviesUrl = (string: string) => `/movies${string}`
export const getAuthUrl = (string: string) => `/auth${string}`
