const ms = require('ms');
const axios = require('axios');
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');


module.exports = {
    name: 'pricedualsword6',
    description: "List Price Dual Sword 6.1",

    async execute({ client, inter }) {
        const BlacMarket = await axios.get(`https://www.albion-online-data.com/api/v2/stats/prices/T6_2H_DUALSWORD@1?locations=Blackmarket`);
        const Caerleon = await axios.get(`https://www.albion-online-data.com/api/v2/stats/prices/T6_2H_DUALSWORD@1?locations=caerleon`);
        console.log(BlacMarket?.data?.[0])
        const embed = new EmbedBuilder()
        .setThumbnail('https://cdn.discordapp.com/icons/760431384127864842/cfa7adbca196b7c7965525d4c9993eb5.webp?size=96')

            .setAuthor({ name: `🍟 Price Dual Sword 6.1` })
            .addFields({name: 'Black Market', value: '\u200B', inline: false})
            .addFields(
                { name: 'Quality', value: 'Normal', inline: true },
                { name: 'Buy Price Min', value: BlacMarket?.data?.[0]?.buy_price_min.toString() || "0", inline: true },
                { name: 'Buy Price Max', value: BlacMarket?.data?.[0]?.buy_price_max.toString()|| "0", inline: true },
                { name: '\u000b', value: 'Good', inline: true },
                { name: '\u000b', value: BlacMarket?.data?.[1]?.buy_price_max.toString() || "0", inline: true },
                { name: '\u000b', value: BlacMarket?.data?.[1]?.buy_price_max.toString() || "0", inline: true },
                { name: '\u000b', value: 'Outstanding', inline: true },
                { name: '\u000b', value: BlacMarket?.data?.[2]?.buy_price_max.toString() || "0", inline: true },
                { name: '\u000b', value: BlacMarket?.data?.[2]?.buy_price_max.toString() || "0", inline: true },
                { name: '\u200B', value: '\u200B', inline: true },
            )
            .addFields({name: 'Caerleon', value: '\u200B', inline: false})
            .addFields(
                { name: 'Quality', value: 'Normal', inline: true },
                { name: 'Sell Order Min', value: Caerleon?.data?.[0]?.sell_price_min.toString() || "0", inline: true },
                { name: 'Sell Order Max', value: Caerleon?.data?.[0]?.sell_price_max.toString() || "0", inline: true },
                { name: '\u000b', value: 'Good', inline: true },
                { name: '\u000b', value: Caerleon?.data?.[1]?.sell_price_min.toString() || "0", inline: true },
                { name: '\u000b', value: Caerleon?.data?.[1]?.sell_price_max.toString() || "0", inline: true },
                { name: '\u000b', value: 'Outstanding', inline: true },
                { name: '\u000b', value: Caerleon?.data?.[2]?.sell_price_min.toString() || "0", inline: true },
                { name: '\u000b', value: Caerleon?.data?.[2]?.sell_price_max.toString() || "0", inline: true },
                { name: '\u200B', value: '\u200B', inline: true },
            )
            //.setFooter({ text: 'Music Bot - Made with heart by Lelegoyeng❤️', iconURL: inter.member.avatarURL({ dynamic: true })})
            .setColor('ff0000')
            .setTimestamp()




        inter.reply({ embeds: [embed] });
    },
};
