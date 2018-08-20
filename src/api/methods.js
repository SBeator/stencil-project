import axios from 'axios'

const baseUrl = process.env.BASE_URL

export async function send(url, {
  method = 'GET',
  data = {},
  headers = {}
}) {
  let responseData
  try {
    const response = await axios({
      url: `${baseUrl}${url}`,
      method: method,
      headers: {
        'me-client-type': 'me-client/web',
        ...headers
      },
      data
    })
    responseData = response.data
  } catch (e) {
    responseData = (e.response && e.response.data) || {
      success: false,
      msg: '失败'
    }
  }

  return responseData
}

export async function post(url, data, token = '') {
  return send(url, {
    method: 'POST',
    data,
    headers: {
      'Content-Type': 'application/json',
      'x-me-token': token
    }
  })
}

export async function get(url, token = '') {
  return send(url, {
    headers: {
      'x-me-token': token
    }
  })
}
