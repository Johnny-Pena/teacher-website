import { Link } from "react-router-dom";


export default function BioComp() {
  return (
    <>
    <div className="flex flex-col items-center px-4 pt-6">
    <h1 className="text-center text-2xl font-bold mt-14 mb-6 md:text-5xl">Meet the Teacher</h1>

    <div className="hero bg-base-100 mb-6">
    <div className="hero-content flex-col lg:flex-row max-w-6xl mx-auto px-4">
      <img
        src="/assets/TeacherWebsiteHomePagePic.jpg"
        className="w-full rounded-lg shadow-2xl sm:w-1/3"
        alt="Johnny Peña Bio Picture"
        loading="lazy"
        width="512"
        height="auto"
      />
      <div className="lg:ml-8 w-full">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <h3 className="text-xl sm:text-2xl font-bold w-full sm:w-auto mb-2 sm:mb-0">Johnny Peña</h3> 
          <div className="badge badge-primary text-md font-semibold">Master of Music Degree</div>
          <div className="badge badge-secondary text-md font-semibold">15+ Years Teaching Experience</div>
          <div className="badge badge-info text-md font-semibold">Competition Winner</div>
        </div>
        <p className="py-6">
        Johnny Peña has been a music educator for the last 15 years and has taught private guitar instruction, guitar ensemble, guitar literature, music theory, and guitar pedagogy. He has been on faculty at two Universities: The University of Texas of San Antonio (2018-2022) and Baptist University of the Americas (2016-2018) as a lecturer of guitar. He received a Master of Music Degree in Guitar Performance from UTSA under the direction of Dr. Matthew Dunne in December 2014.
        </p>
        <p>Johnny has participated in many international guitar competitions where he has earned 1st prize from the Mountain View College Festival and Competition (2018) and 3rd prize from the Lone Star Guitar Festival and Competition (2017). He has also had master classes with many world class guitarists including David Russell, Berta Rojas, Xuefei Yang, Adam Holzman, Fabio Montomoli, Bill Kannengiser, and more. One of his favorite performances includes being invited to perform the “Concierto de Aranjuez” at the Majestic Theatre with Symphony Viva in November 2021.
        </p>  
        <p className="py-6">
        Johnny has recently begun a solo music project in which he releases original music under the artist name, “Key Mosaic.” His music features both classical and electric guitars. He enjoys blending classical and contemporary styles to create his music.
        </p>
        <Link to="https://pin.it/6NSlpF4w1" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-md mt-6 mr-4">Visit Pintrest Account</Link>
        <Link to="/iste-standards" className="btn btn-primary btn-md mt-6 mr-4">View ISTE Standards</Link>
        <Link to="/mental-health-certificate" className="btn btn-primary btn-md mt-6 mr-4">Mental Health Certificate</Link>
        <Link to="/dyslexia-training-certificate" className="btn btn-primary btn-md mt-6 mr-4">Dyslexia Training Certificate</Link>

      </div>
    </div>
    </div>
        
    </div>    
    </>
  );
}