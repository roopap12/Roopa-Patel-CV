import axios from 'axios'
import { appId, apiKey } from '../env.js'

export async function getTest() {
  return await axios.post(
    `/api/app/${appId}/endpoint/data/v1/action/findOne`,
    {
      dataSource: 'Cluster0',
      database: 'test',
      collection: 'test',
    },
    {
      headers: {
        'Content-Type': 'application/json',
        apiKey: apiKey,
      },
    }
  )
}
