module.exports = {
    port: parseInt(process.env.PORT) || 4000,
    nodeEnv: process.env.NODE_ENV || 'production',
    saltRounds: parseInt(process.env.SALT_ROUNDS) || 10,
    jwtAccessTokenSecret: process.env.JWT_ACCESS_TOKEN || 'fbfb39c5a35ccce97b37eeb68f350bad6b997477ae9b966cdf0bfe18e0b9e4d5',
    jwtRefreshTokenSecret: process.env.JWT_REFRESH_TOKEN || '0a703db664093ac59e414033bd6f07a24c21cb6e73fcbd2509dea73e972424bb'
};