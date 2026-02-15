import React from 'react';
import '../styles/Places.css';
import { FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';

const Places = () => {
  const places = [
    {
      id: 1,
      name: 'Gajapati Palace',
      description: 'Maharaja Krushnachandra Gajapati, the erstwhile ruler of Paralakhemundi State near Andhra – Odisha border was among of the greatest luminaries of Odisha throughout her history. A visionary and passionate soul for art and heritage, Maharaja Krushnachandra Gajapati was one of the first Odias to initiate the movement for separate statehood for the Odia speaking people. The seeds for such a noble initiative were germinated in the Gajapati Palace of Paralakhemundi. Today, the palace though degraded with the ravage of time still stands as an architectural splendour of the colonial past.',
      distance: '8.8 KM',
      mapLink: 'https://www.google.com/maps/place/Gajapati+Palace,+Q3HP%2B4WX+Palace+St,+Paralakhemundi,+Odisha+761200,+India/@18.77827,84.08171,17z',
      wikiLink: 'https://en.wikipedia.org/wiki/Gajapati_Palace',
      image: '/gajapati.png',
      location: 'Paralakhemundi Town'
    },
    {
      id: 2,
      name: 'Gandahati Waterfall',
      description: 'The Gandahati waterfall is a well-liked natural landmark. It is a popular tourist destination in Odisha\'s Gajapati District that sees a lot of traffic in the winter. This waterfall is well-known for its sparkling cascade, which flows consistently and year-round. Visitors from all surrounding places have been drawn to it by its beautiful charm amidst the forest cover. The waterfall is situated on the Mahendratanaya river, approximately 30 km from Paralakhemundi.',
      distance: '19.6 KM',
      mapLink: 'https://www.google.com/maps/place/Gandahati+Waterfall,+Gajapati+District,+Odisha,+India/@18.8893,84.2701,15z',
      wikiLink: 'https://en.wikipedia.org/wiki/Gandahati_waterfall',
      image: '/waterfall.png',
      location: 'Gajapati District'
    },
    {
      id: 3,
      name: 'Mahendragiri',
      description: 'Mahendragiri, located in Gajapati district, is a renowned tourist and religious site in eastern Odisha. This peak, part of the Eastern Ghats, rises to 1,501 meters (4,976 ft) above sea level. According to Hindu mythology, Lord Parshuram meditated on Mahendragiri and received the divine Parsu (double axe) from Lord Shiva. It is also believed to be the mountain from which Lord Hanuman fetched the Sanjeevani herb.',
      distance: '50.2 KM',
      mapLink: 'https://www.google.com/maps/place/Mahendragiri,+Odisha,+India/@18.9665,84.3649,13z',
      wikiLink: 'https://en.wikipedia.org/wiki/Mahendragiri_(Odisha)',
      image: '/Mahendragiri.png',
      location: 'Eastern Ghats'
    },
    {
      id: 4,
      name: 'Padmasambhava Mahavihara Monastery',
      description: 'The Padmasambhava Mahavihara monastery at Chandragiri, near Mohana of Gajapati District of Odisha is the largest Buddhist Monastery in South Asia. It is named after Acharya Padmasambhava, an Odisha born monk who spread Buddhism in Tibet in 7th century. There are around 200 monks residing here. It is a beautiful religious and peaceful place to visit in Gajapati district, Odisha.',
      distance: '73 KM',
      mapLink: 'https://www.google.com/maps/place/Padmasambhava+Mahavihara+Monastery,+Jirang,+Odisha,+India/@19.2734,84.2634,15z',
      wikiLink: 'https://en.wikipedia.org/wiki/Padmasambhava_Mahavihara_monastery',
      image: '/Mahavihara.png',
      location: 'Chandragiri, near Mohana'
    },
    {
      id: 5,
      name: 'Taptapani',
      description: 'Taptapani is famous for its hot sulfur water spring. The name "Taptapani" also suggests that. "Tapta" means hot and "pani" means water. The hot water from the natural spring of Taptapani are attributed with medicinal properties and can be bathed in at the pond created next to the hot spring. The hot spring is situated at the eastern slope of the eastern ghat at a crest of the hill within the lush green forest having wide range of flora and fauna.',
      distance: '77.9 KM',
      mapLink: 'https://www.google.com/maps/place/Taptapani+Hot+Spring,+Odisha,+India/@19.3516,84.2349,14z',
      wikiLink: 'https://en.wikipedia.org/wiki/Taptapani',
      image: '/taptapani.png',
      location: 'Near Mohana'
    }
  ];

  return (
    <div className="places-wrapper">
      <div className="places-container">
        <div className="places-intro">
          <h2 className="places-intro-title">Paralakhemundi: A Glimpse into History</h2>
          <p className="places-intro-text">
            Paralakhemundi, shortly known as Parala, is the district headquarters of Gajapati and one of Odisha's oldest municipalities, established in 1885. The town shares its borders with Andhra Pradesh and is separated from the adjacent town of Pathpatnam by the River Mahendra Tanaya. It is a place where history, culture, and nature converge.
          </p>
          <p className="places-intro-text">
            In the later medieval period, it became the capital of the Paralakhemundi Estate under the Eastern Ganga dynasty's Khemundi Branch. The town is celebrated as an ancient cultural center and the birthplace of notable personalities like the poet Gopalakrusna Pattanayaka and the statesman Krushna Chandra Gajapati Narayan Deo. Its landscape is dotted with century-old temples, monasteries, palaces, and heritage buildings.
          </p>
          <div className="places-highlight">
            <p>
              <strong>Did you know?</strong> The district of Gajapati is named after Maharaja Sri Krushna Chandra Gajapati Narayan Dev, the Raja Sahib of the Paralakhemundi estate, who was honoured as the first Prime Minister of Odisha when the state was formed in 1936.
            </p>
          </div>
        </div>

        <div className="places-grid">
          {places.map((place) => (
            <div key={place.id} className="place-card">
              <div className="place-image-container">
                <img src={place.image} alt={place.name} className="place-image" />
                <div className="place-overlay">
                  <span className="place-number">#{place.id}</span>
                  <span className="place-category">{place.location}</span>
                </div>
              </div>
              <div className="place-content">
                <h3 className="place-title">{place.name}</h3>
                <p className="place-description">
                  {place.description}
                  <a href={place.wikiLink} target="_blank" rel="noopener noreferrer" className="place-read-more" title="Read more on Wikipedia">
                    Read more <FaExternalLinkAlt />
                  </a>
                </p>
                <div className="place-footer">
                  <div className="place-distance">
                    <FaMapMarkerAlt className="distance-icon" />
                    <span>{place.distance} from venue</span>
                  </div>
                  <a href={place.mapLink} target="_blank" rel="noopener noreferrer" className="place-map-link" title="Open in Google Maps">
                    <FaMapMarkerAlt /> View on Map
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Places;