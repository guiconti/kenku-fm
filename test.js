const { spawn } = require('child_process');
const audios = [
    '/Users/guilhermecontiteixeira/github/kenku-fm/src/assets/audios/tts/v0-1709244368130-rvc_output.wav',
    '/Users/guilhermecontiteixeira/github/kenku-fm/src/assets/audios/tts/v0-1709243894689-tts_output.wav',
    '/Users/guilhermecontiteixeira/github/kenku-fm/src/assets/audios/tts/v0-1709243934598-rvc_output.wav',
    '/Users/guilhermecontiteixeira/github/kenku-fm/src/assets/audios/tts/v0-1709243942137-rvc_output.wav'
]

const ffmpegProcess = spawn("ffmpeg", ["-f", "concat", "-safe", "0", "-i", `<(printf "file '%s'\n" ${audios.join(' ')})`, "-c", "copy", "out.wav"]);

console.log(`<(printf "file '%s'\n" ${audios.join(' ')})`);

ffmpegProcess.stdout.on('data', function (data) {
    console.log(data);
});

ffmpegProcess.stderr.setEncoding("utf8")
ffmpegProcess.stderr.on('data', function (data) {
    console.log(data);
});

ffmpegProcess.on('close', function () {
    console.log('finished');
});
