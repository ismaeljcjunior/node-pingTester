const exec = require('child_process').exec
const fs = require('fs')

const hosts = ['www.google.com', '10.50.2.181','10.50.2.250']
const replyFromLocale = 'Reply from'

const promises = []

hosts.forEach((host) => {
    promises.push(new Promise((resolve, reject) => {
        exec(`ping -n 1 -w 1000 ${host}`, (err, stdout, stderr) => {
            
            let status= "offline"
            let output = stderr.toString()
            let replyFromIndex = output.indexOf(replyFromLocale)
            if(replyFromIndex > 0 && output.substring(replyFromIndex).toUpperCase().indexOf('BYTES' > 0))
        })
        
    }))
})