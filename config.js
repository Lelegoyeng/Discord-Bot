module.exports = {
    app: {
        token: 'MTA0NjA1MjUyNzI2ODk2NjQ4MQ.GI0OAv.4a2rJWmK1H7NzIwDf6Tj3tt4tS9wUE9KLPiWb4',
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
