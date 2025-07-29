'use client';

import Image from "next/image";
// import Link from "next/link";

interface Speaker {
  id: number;
  image: string;
  name: string;
  institution: string;
  country: string;
  altText: string;
}

const membersData: Speaker[] = [
  {
    id: 1,
    image: "/images/images/Harit.webp",
    name: "Harit Agroia",
    institution: "San José State University",
    country: "USA",
    altText: "Harit Agroia",
  },
  {
    id: 2,
    image: "/images/images/vincent.webp",
    name: "Vincent La Placa",
    institution: "University of Greenwich",
    country: "UK",
    altText: "Vincent La Placa",
  },
  {
    id: 3,
    image: "/images/images/sergey.webp",
    name: "Sergey Suchkov",
    institution: "National Center for Human Photosynthesis",
    country: "Mexico",
    altText: "Sergey Suchkov",
  },
  {
    id: 4,
    image: "/images/images/Meram.webp",
    name: "Meram Mohammed Ali Azzani",
    institution: "Universiti Teknologi MARA (UiTM)",
    country: "Malaysia",
    altText: "Meram Mohammed Ali Azzani",
  },
  {
    id: 5,
    image: "/images/images/Uqbah.webp",
    name: "Uqbah Iqbal",
    institution: "Universiti Kebangsaan",
    country: "Malaysia",
    altText: "Uqbah Iqbal",
  },
  {
    id: 6,
    image: "/images/images/elymer.webp",
    name: "Elymar A. Pascual",
    institution: "Talangan Integrated National High School",
    country: "Philippines",
    altText: "Elymar A. Pascual",
  },
  {
    id: 7,
    image: "/images/images/joel.webp",
    name: "Joel Rey Acob",
    institution: "Visayas State University",
    country: "Philippines",
    altText: "Joel Rey Acob",
  },
  {
    id: 8,
    image: "/images/images/poornima.jpg",
    name: "Poornima Suryanath Singh",
    institution: "Amity University",
    country: "India",
    altText: "Poornima Suryanath Singh",
  },
];

const Speakers = () => {
  return (
    <div className="speakers-section first-design">
      <div className="import_wrap">
        <div className="auto-container clearfix">
          <div className="row test-imp-row">
            <div
              className="col-md-12 session_wrap_style1 wow fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1000ms"
            >
              <h2>
                Our <span>Planning Committee</span>
              </h2>
            </div>
          </div>

          <div className="">
            <div className="members-card-block">
              <div className="row-member row">
                {membersData.map((speaker, index) => (
                  <div
                    className={`col-lg-3 col-md-6 col-sm-6 mb-4 ${index < 4
                      ? 'members-specific-space'
                      : 'member-spacing'
                      }`}
                    key={index}
                  >
                    <div className="card text-center p-3 border">
                      <div className="custom-border-wrapper">
                        <div className="image-wrapper mb-3">
                          <Image
                            src={speaker.image}
                            alt={speaker.name}
                            title={speaker.name}
                            width={200}
                            height={200}
                            className="rounded-circle img-fluid"
                          />
                        </div>
                      </div>
                      <div className="speaker-details normal-design">
                        <h3>{speaker.name}</h3>
                        <p>{speaker.institution}</p>
                        <p>{speaker.country}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* <div className="members-view-all-btn-block">
            <Link
              href="/committee"
              title="View All"
              className="view-more-speakers-btn"
            >
              View All
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Speakers;
