/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('cities').del();
  await knex('cities').insert([
    {
      id: 1,
      city_name: 'Cancun',
      country: 'Mexico',
      city_image_path: '../public/images/cancun/Cancun-Mexico.png'
    },
    {
      id: 2,
      city_name: 'Barcelona',
      country: 'Spain',
      city_image_path: '../public/images/barcelona/Barcelona-Spain.png'
    },
    {
      id: 3,
      city_name: 'Istanbul',
      country: 'Turkey',
      city_image_path: '../public/images/istanbul/Istanbul-Turkey.png'
    },
    {
      id: 4,
      city_name: 'London',
      country: 'England',
      city_image_path: '../public/images/london/London-England.png'
    },
    {
      id: 5,
      city_name: 'Moscow',
      country: 'Russia',
      city_image_path: '../public/images/moscow/Moscow-Russia.png'
    },
    {
      id: 6,
      city_name: 'Paris',
      country: 'France',
      city_image_path: '../public/images/paris/Paris-France.png'
    },
    {
      id: 7,
      city_name: 'Rio de Janeiro',
      country: 'Brazil',
      city_image_path: '../public/images/riodejaneiro/Rio-Brazil.png'
    },
    {
      id: 8,
      city_name: 'Rome',
      country: 'Italy',
      city_image_path: '../public/images/rome/Rome-Italy.png'
    },
    {
      id: 9,
      city_name: 'Shanghai',
      country: 'China',
      city_image_path: '../public/images/shanghai/Shanghai-China.png'
    },
    {
      id: 10,
      city_name: 'Sydney',
      country: 'Australia',
      city_image_path: '../public/images/sydney/Sydney-Australia.png'
    }
  ]
);
}
