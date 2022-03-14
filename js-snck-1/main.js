const zucchine =[
    {
        varietà : 'nera',
        peso: '100 grammi',
        lunghezza: '10cm'
    },
    {
        varietà : 'gialla',
        peso: '150 grammi',
        lunghezza: '15cm'
    },
    {
        varietà : 'verde',
        peso: '100 grammi',
        lunghezza: '17cm'
    },
    {
        varietà : 'romana',
        peso: '90 grammi',
        lunghezza: '21cm'
    },
    {
        varietà : 'campana',
        peso: '100 grammi',
        lunghezza: '10cm'
    },
    {
        varietà : 'francese',
        peso: '150 grammi',
        lunghezza: '25cm'
    },
    {
        varietà : 'velenosa',
        peso: '90 grammi',
        lunghezza: '14cm'
    },
    {
        varietà : 'belga',
        peso: '90 grammi',
        lunghezza: '10cm'
    },
    {
        varietà : 'zucchinosa',
        peso: '150 grammi',
        lunghezza: '20cm'
    },
    {
        varietà : 'mignon',
        peso: '50 grammi',
        lunghezza: '17cm'
    },
]

let pesoTotale = 0;

zucchine.forEach((element) => {
    pesoTotale += element.peso;
})