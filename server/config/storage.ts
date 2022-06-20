import { diskStorage } from 'multer'

export default {
  driver: 'local',
  tmpFolder: './tmp',
  uploadsFolder: './storage/uploads',
  // move to seperate class
  multer: {
    storage: diskStorage({
      destination: (req, file, cb) => {
        const tmpFileName = file.filename;
        const dateTime = new Date()
        const year = dateTime.getFullYear()
        const month = dateTime.getMonth() + 1
        const day = dateTime.getDate()
        const hour = dateTime.getHours()
        const minute = dateTime.getMinutes()
        const fileWithCurrentTime = `${year}-${month}-${day}-${hour}-${minute}-${tmpFileName}`

        file.filename = fileWithCurrentTime

        cb(null, "./storage/uploads");
      }
    })
  }
}