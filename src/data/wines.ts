// Wine catalog (22 labels).
// TODO: per-product Tienda Nube links are pending; every "comprar" wine points to the store home for now.
import { TIENDA_URL } from '@/services/links';
import type { Wine } from '@/types';

const OPORTO_INDUSTRIAL =
  'El mismo perfil de nuestro Oporto clásico — tinto licoroso estibado en barrica — en formato industrial, pensado para grandes cocinas, pastelerías y heladerías.';
const MARSALA_INDUSTRIAL =
  'El mismo Marsala emblema de la casa, en formato industrial — la base de nuestra provisión a heladerías y pastelerías de todo el país.';

export const wines: Wine[] = [
  // Generosos
  {
    id: 'moscato',
    name: 'Moscato',
    category: 'generosos',
    description:
      'Licoroso y aromático, elaborado con Moscatel Rosada. Guarda notas a pasas de uva, almendras y cítricos, con el dulzor natural de la uva. Se disfruta bien frío, como digestivo o junto a un postre.',
    cta: 'comprar',
    buyUrl: TIENDA_URL,
  },
  {
    id: 'marsala',
    name: 'Marsala',
    category: 'generosos',
    description:
      'El vino emblema de la casa. Nace de un corte de vino rosado con arrope de uva y se fortifica hasta lograr su color caramelo oscuro, con notas a tostado, café y fruta madura. Compañero clásico de una tabla de quesos, frutos secos o un sambayón.',
    cta: 'comprar',
    buyUrl: TIENDA_URL,
  },
  {
    id: 'oporto',
    name: 'Oporto',
    category: 'generosos',
    description:
      'Tinto licoroso, estibado en barrica durante varios meses. Endulzado con arrope, desarrolla aromas a especias y fruta seca con un final aterciopelado. Se disfruta a temperatura ambiente o levemente fresco, junto a quesos, ahumados o chocolate.',
    cta: 'comprar',
    buyUrl: TIENDA_URL,
  },
  {
    id: 'jerez',
    name: 'Jerez',
    category: 'generosos',
    description:
      'De tradición española, seco, criado bajo flor hasta lograr su color paja a dorado y su característico sabor a almendra. Aroma a avellana y un paladar suave y elegante. Se sirve frío, como aperitivo con jamón, aceitunas o tapas.',
    cta: 'comprar',
    buyUrl: TIENDA_URL,
  },
  {
    id: 'mistela',
    name: 'Mistela',
    category: 'generosos',
    description:
      'Elaborada con Moscatel Rosado cosechado a fines de abril para concentrar el dulzor. El mosto fresco se fortifica con alcohol y se deja estabilizar antes de su crianza. Ideal con postres, o simplemente sola.',
    cta: 'comprar',
    buyUrl: TIENDA_URL,
  },

  // Espumante
  {
    id: 'espumante-madero',
    name: 'Espumante Madero',
    category: 'espumante',
    description:
      'Un corte de Chenin y Sangiovese elaborado por el método Charmat. Suave, equilibrado y frutado, con notas cítricas y de frutos rojos. Se disfruta bien frío, como aperitivo o junto a pescados y mariscos.',
    cta: 'comprar',
    buyUrl: TIENDA_URL,
  },
  {
    id: 'nebiolo',
    name: 'Nebiolo',
    category: 'espumante',
    description:
      'Elaborado con la varietal Nebbiolo, de tradición piamontesa. Espumante dulce de color rojo cereza aterciopelado. Acompaña bien tostadas, carnes, pastas y quesos duros o picantes.',
    cta: 'comprar',
    buyUrl: TIENDA_URL,
  },
  {
    id: 'gamba-di-pernice-rosado',
    name: 'Gamba di Pernice Rosado',
    category: 'espumante',
    description:
      'Un corte de Pedro Giménez y Syrah, edulcorado con mosto concentrado y carbonatado en frío. Refrescante y con notas dulces marcadas — ideal bien frío, como aperitivo o para una ocasión especial.',
    cta: 'comprar',
    buyUrl: TIENDA_URL,
  },
  {
    id: 'gamba-di-pernice-tinto',
    name: 'Gamba di Pernice Tinto',
    category: 'espumante',
    description:
      'De uva Bonarda, con un color intenso y sabor a fruta roja fresca. Las burbujas combinadas con el azúcar natural del mosto logran un equilibrio entre dulzor y acidez. Acompaña pastas, carne de ternera y tablas de quesos.',
    cta: 'comprar',
    buyUrl: TIENDA_URL,
  },
  {
    id: 'extra-brut',
    name: 'Extra Brut',
    category: 'espumante',
    description:
      'Elaborado con uva Chenin, de color amarillo con reflejos dorados y aromas a fruta seca. Se sirve frío, junto a pescados, mariscos, quesos y fiambres.',
    cta: 'comprar',
    buyUrl: TIENDA_URL,
    pending:
      'Confirmar descripción (en el sitio viejo estaba duplicada con Gamba di Pernice Tinto).',
  },

  // Tintos
  {
    id: 'malbec',
    name: 'Malbec',
    category: 'tintos',
    description:
      'Rojo intenso con reflejos granate, de fermentación controlada para preservar su carácter frutado. Aromas a fruta roja fresca y el perfil especiado típico de Maipú, con taninos suaves. Se sirve entre 16 y 18°C, junto a carnes rojas, asado, pastas con tomate o quesos duros.',
    cta: 'comprar',
    buyUrl: TIENDA_URL,
  },
  {
    id: 'targa-florio',
    name: 'Targa Florio',
    category: 'tintos',
    description:
      'Un corte de Malbec con la varietal italiana Ancellotta, ensamblado a degustación por nuestro enólogo. Color oscuro y carácter frutado, con taninos maduros, notas a fruta roja y especias, y un final herbáceo intenso.',
    cta: 'comprar',
    buyUrl: TIENDA_URL,
  },
  {
    id: 'madero-tinto',
    name: 'Madero Tinto',
    category: 'tintos',
    description:
      '100% Malbec, elaborado de forma tradicional en la bodega. Taninos suaves, aromas intensos a fruta roja y color rojo rubí. Acompaña carnes rojas, asado, quesos duros y pastas.',
    cta: 'comprar',
    buyUrl: TIENDA_URL,
  },
  {
    id: 'madero-gran-reserva',
    name: 'Madero Gran Reserva',
    category: 'tintos',
    description:
      'Elaborado en piletas con epoxi; parte del vino prensado se reincorpora para una fermentación maloláctica que suaviza la acidez y aporta un paladar untuoso. Estiba en barricas de roble francés, ganando estabilidad y complejidad.',
    cta: 'comprar',
    buyUrl: TIENDA_URL,
  },
  {
    id: 'patero',
    name: 'Patero',
    category: 'tintos',
    description:
      'Nuestro homenaje a la pisada tradicional de la uva, el gesto fundacional de la casa. Un tinto de carácter, pensado para la mesa de todos los días.',
    cta: 'comprar',
    buyUrl: TIENDA_URL,
    pending: 'Confirmar varietal y perfil real.',
  },

  // Dulces naturales
  {
    id: 'dulce-florio',
    name: 'Dulce Florio',
    category: 'dulces',
    description:
      'Elaborado con Torrontés Riojano, con maceración pelicular nocturna en frío para extraer todo su aroma. Notas cítricas y de pomelo, fresco y equilibrado entre acidez y dulzor natural. Se sirve bien frío, como aperitivo o con comida picante e intensa.',
    cta: 'comprar',
    buyUrl: TIENDA_URL,
  },
  {
    id: 'dulce-florio-rosado',
    name: 'Dulce Florio Rosado',
    category: 'dulces',
    description:
      'De uva Syrah, que le aporta su color característico. El mosto se separa temprano de los hollejos y se frena en frío para conservar el azúcar natural de la uva. Aromático y fresco, con notas a fruta roja — acompaña pescados, mariscos, pastas, quesos, carnes y postres.',
    cta: 'comprar',
    buyUrl: TIENDA_URL,
  },
  {
    id: 'madero-blanco',
    name: 'Madero Blanco',
    category: 'dulces',
    description:
      'Blanco elaborado con uvas aromáticas seleccionadas, con maceración pelicular nocturna en frío. Equilibrio delicado entre notas cítricas y dulces, se sirve bien frío.',
    cta: 'comprar',
    buyUrl: TIENDA_URL,
  },

  // Industriales (sold on request, so they link to the contact page)
  {
    id: 'oporto-x5l',
    name: 'Oporto x5L',
    category: 'industriales',
    description: OPORTO_INDUSTRIAL,
    cta: 'consultar',
    buyUrl: '/contacto',
  },
  {
    id: 'oporto-x20l',
    name: 'Oporto x20L',
    category: 'industriales',
    description: OPORTO_INDUSTRIAL,
    cta: 'consultar',
    buyUrl: '/contacto',
  },
  {
    id: 'marsala-x5l',
    name: 'Marsala x5L',
    category: 'industriales',
    description: MARSALA_INDUSTRIAL,
    cta: 'consultar',
    buyUrl: '/contacto',
  },
  {
    id: 'marsala-x20l',
    name: 'Marsala x20L',
    category: 'industriales',
    description: MARSALA_INDUSTRIAL,
    cta: 'consultar',
    buyUrl: '/contacto',
  },
];
