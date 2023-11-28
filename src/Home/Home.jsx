import ExtraStudy from "../Components/ExtraStudy/ExtraStudy";
import ReadQuran from "../Components/ReadQuran/ReadQuran";
import IftarRecipe from "../Components/iftarRecipe/IftarRecipe";
import SomeHadis from "../Components/someHadis/SomeHadis";
import Testimonial from "../Pages/UserReview/Testimonial";
import Banner from "./Banner/Banner";


const Home = () => {
     return (
          <div className="">
               <Banner />
               <ReadQuran />
               <ExtraStudy />
               <IftarRecipe />
               <SomeHadis/>
               <Testimonial/>
          </div>
     );
};

export default Home;