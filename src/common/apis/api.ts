import {requestUpload} from '../../utils/wxPromise'

export const upload = async (tempFilePaths) => {
  return await requestUpload('upload', tempFilePaths)
}
