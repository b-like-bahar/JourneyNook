/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('attractions').del();
  await knex('attractions').insert([
      {
        id: 6,
        city_id: 2,
        attraction_name: 'La Sagrada Família',
        category: 'Basilica',
        description: 'An iconic basilica designed by Antoni Gaudí, still under construction since 1882. It’s a UNESCO World Heritage Site and one of the most visited landmarks in Spain.',
        best_time_to_visit: 'Early morning to avoid crowds',
        hours: '09:00 AM to 06:00 PM',
        fee: '€26 (donations for preservation appreciated)',
        nearby_attraction: 'Casa Milà, Casa Batlló, Park Güell',
        travel_tips: 'Pre-book tickets to skip the long queues, visit early morning or late afternoon for fewer crowds.',
        attraction_image_path: '../public/images/barcelona/Sagrada-Familia.png'
      },
      {
        id: 7,
        city_id: 2,
        attraction_name: 'Park Güell',
        category: 'Park',
        description: 'A colorful public park designed by Gaudí, offering stunning views of Barcelona. It’s famous for its unique architecture, mosaic work, and artistic landscaping.',
        best_time_to_visit: 'Morning or late afternoon for cooler weather and fewer tourists',
        hours: '08:00 AM to 09:30 PM',
        fee: '€10',
        nearby_attraction: 'La Sagrada Família, Gràcia District',
        travel_tips: 'Wear comfortable shoes, as the park involves a lot of walking. Visit during the off-season to avoid crowds.',
        attraction_image_path: '../public/images/barcelona/Park-Güell.png'
      },
      {
        id: 8,
        city_id: 2,
        attraction_name: 'Casa Batlló',
        category: 'Historical House',
        description: 'A masterpiece by Gaudí, this modernist building is famous for its colorful facade and whimsical architecture.',
        best_time_to_visit: 'Early afternoon for the best light on the facade',
        hours: '09:00 AM to 08:00 PM',
        fee: '€25',
        nearby_attraction: 'La Pedrera (Casa Milà), Passeig de Gràcia',
        travel_tips: 'Audio guides are available for a self-guided tour. Visit in the afternoon to capture the facade under the best lighting.',
        attraction_image_path: '../public/images/barcelona/Casa-Batlló.png'
      },
      {
        id: 9,
        city_id: 2,
        attraction_name: 'La Rambla',
        category: 'Street/Promenade',
        description: 'Barcelona’s famous tree-lined street, filled with shops, cafes, and street performers. It stretches from Plaça de Catalunya to the waterfront.',
        best_time_to_visit: 'Late afternoon for a lively atmosphere',
        hours: 'Open 24 hours',
        fee: 'Free entry',
        nearby_attraction: 'Boqueria Market, Columbus Monument',
        travel_tips: 'Beware of pickpockets, especially in crowded areas. Enjoy street food from the local vendors at Boqueria Market.',
        attraction_image_path: '../public/images/barcelona/La-Rambla.png'
      },
      {
        id: 10,
        city_id: 2,
        attraction_name: 'Camp Nou',
        category: 'Stadium',
        description: 'The home stadium of FC Barcelona, one of the most famous football teams in the world. Visitors can tour the stadium and visit the FC Barcelona Museum.',
        best_time_to_visit: 'Morning for tours, or match days for a thrilling experience',
        hours: '10:00 AM to 06:00 PM (varies on match days)',
        fee: '€28 for a stadium tour',
        nearby_attraction: 'FC Barcelona Museum, Les Corts District',
        travel_tips: 'Book tickets in advance for both tours and matches. If attending a game, arrive early for the pre-match atmosphere.',
        attraction_image_path: '../public/images/barcelona/Camp-Nou.png'
      }
    ]
);
}
