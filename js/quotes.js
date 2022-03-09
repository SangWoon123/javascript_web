const quotes =[
    {
        quote:"20대에는 의지, 30대에는 기지, 40대에는 판단이 지배한다.",
        author:"Benjamin Franklin",
    },
    {
        quote:"인생은 가까이서 보면 비극이지만 멀리서 보면 희극이다",
        author:"Charlie Chaplin",
    },
    {
        quote:"자신을 화나게 했던 행동을 다른 이에게 행하지 말라.",
        author:"Socrates",
    },
    {
        quote:"계획 없는 목표는 한낱 꿈에 불과하다.",
        author:"Antoine de Saint-Exupery",
    },
    {
        quote:"인격은 그 사람의 운명이다.",
        author:"Heraclitus",
    },
    {
        quote:"우리 안에는 활기와 강력한 욕정이 자리잡고 있다.",
        author:"William Shakespeare",
    },
    {
        quote:"사탕발린 칭찬이 아닌 분별있는 애정의 증표로 친구를 사귀어라.",
        author:"Socrates",
    },
    {
        quote:"모든 언행을 칭찬하는 자보다 결점을 친절하게 말해주는 친구를 가까이하라.",
        author:"Socrates",
    },
    {
        quote:"나는 신실하지 않으며, 심지어 이렇게 말하는 이 순간에도 그렇다.",
        author:"Jules Renard",
    },
    {
        quote:"지식이 없는 성실은 허약하고 쓸모 없다. 성실이 없는 지식은 위험하고 두려운 것이다.",
        author:"Samuel Johnson",
    },
];

const quote =document.querySelector("#quote span:first-child");
const author =document.querySelector("#quote span:last-child");

const todaysQuote =quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText=todaysQuote.quote;
author.innerText=todaysQuote.author;

