module.exports = {
    app: {
        token: 'MTA0NjA1MjUyNzI2ODk2NjQ4MQ.Gpgp0M.XUVZcBd3u-4aIPCGJyCrtxSAAls3NIl9kCVjGU',
        playing: 'by Lelegoyeng ❤️',
        global: true,
        guild: 'XXX'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
