const data = new Date();
const russiaText = `Меня зовут Алексей, мне ${data.getFullYear() - 1997}.
Заниаматься программированием начал в начале 2020 года. Почему я этим занялся? 
Самая главная причина это интерес к этой сфере, а вторая причина смена нынешней профессии. По образованию я моряк, механик.
Так все же почему программирование, а не что то иное? Это очень сложная и интересная сфера, которая постоянно развивается, 
а вместе с ней и ты. Возможность самореализации через создаваемые проекты, 
будь то для себя или на работе, дают возможность расти и становиться умнее.`

const englishText = `My name is Alexey, I am ${data.getFullYear() - 1997} years old. 
I have been studing programming since 2020. Why did i start to learn it ? 
The main cause it is an interest to this work and second cause it will switch my profession. 
I have seaman education, i am engineer. So, why did i take programming and not something else? The
programing is hardly and interesting profession which developing every day and you developing with it.  
Possibility self-realization by creating projects for youself or at work give possibility to grow and became clever.`



const text = {
  'rus': russiaText,
  'eng': englishText
}

module.exports = {
  text,
}