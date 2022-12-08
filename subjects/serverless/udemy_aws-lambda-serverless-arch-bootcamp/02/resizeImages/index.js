/*
Stopping now.  Not working.  I get the jist.
I'll try again when I want to write more lambda code.
Just want to conintue for now to prep for dso dojo work

This would be helpful at a later time:
https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/getting-started-nodejs.html
*/


const im = require('imagemagick');
const fs = require('fs');
const os = require('os');
// uuid wants me to sign into github to install the module, so just skip it
// const uuidv4 = require('uuid/v4');
const uuid = require('uuid');
const {promisify} = require('util');
// const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-1'});
const s3 = new AWS.s3();

const resizeAsync = promisify(im.resize);
const readFileAsync = promisify(fs.readFile);
const unlinkAsync = promisify(fs.unlink);

exports.handler = async (event) => {
   let filesProcessed = event.Records.map( async (record) => {
        let bucket_name = record.s3.bucket.name;
        let filename = record.s3.object.key;

        // get from s3
        var params = {
            Bucket: bucket,
            Key: filename
        };
        let inputData = await s3.getObject(params).promise();

        // resize the file
        // uuid wants me to sign into github to install the module, so just skip it
        // let tempFile = os.tmpdir() + '/' + uuidv4() + '.jpg';
        let tempFile = os.tmpdir() + '/' + uuid() + '.jpg';
        // let tempFile = os.tmpdir() + '/' + '.jpg';
        let resizeArgs = {
            srcData: inputData.Body,
            dstPath: tempFile,
            width: 150
        };
        await resizeAsync(resizeArgs);

        // read the resized file
        let resizeData = await readFileAsync(tempFile);

        // upload to s3
        let targetFilename = filename.substring(0, filename.lastIndexof('.')) + '-small.jpg';
        var params = {
            Bucket: bucket + '-dest',
            Key: targetFilename,
            Body: new Buffer(resizedData),
            ContentType: 'image/jpeg'
        };

        await s3.putObject(params).promise();
        return await unlinkAsync(tempFile);

   });

   await Promise.all(filesProcessed);
   console.log("done");
   return "done";
}