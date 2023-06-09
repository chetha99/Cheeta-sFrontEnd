import 'font-awesome/css/font-awesome.min.css';
import './assets/css/app.css';
import './assets/css/styles.css';
import LoginPage from './pages/auth/LoginPage'
import Signup from './pages/auth/Signup';
import AdminBlankPage from './pages/AdminBlankPage';
import AdminOverview from './pages/AdminOverview';
import Appraisal from './pages/Appraisal';
import CompanyDetails from './pages/CompanyDetails';
import EmployeeDetails from './pages/EmployeeDetails';
import IntervieweeDetails from './pages/IntervieweeDetails';
import IntervieweeDetails02 from './pages/InterviewPart2';
import IntervieweeDetails2 from './pages/IntervieweeDetails2';
import SingleEmployee from './pages/SingleEmployee';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import IntervieweeDetailsCopy from './pages/IntervieweeDetailsCopy';
import IntervieweeDetails2Copy from './pages/IntervieweeDetails2Copy';
import AppraisalCopy from './pages/AppraisalCopy';
import Card from './pages/Card2';
import RateInterviewee from './pages/RateInterviewee';
import ThankYou from './pages/ThankYou';


function App() {
    
  return (
        <Router>
            <Routes>
                {/* <Route exact path='/' element={<AdminOverview/>} />  */}
                <Route exact path='/' element={<LoginPage/>} />
                <Route exact path='/signup' element={<Signup/>} />
                <Route exact path='/home' element={<AdminBlankPage/>} />
                <Route exact path='/admin-overview' element={<AdminOverview/>} />
                <Route exact path='/appraisal' element={<Appraisal/>} />
                <Route exact path='/appraisalCopy' element={<AppraisalCopy/>} />
                <Route exact path='/company-details' element={<CompanyDetails/>} />
                <Route exact path='/employee-details' element={<EmployeeDetails/>} />
                <Route exact path='/interviewee-details' element={<IntervieweeDetails/>} />
                <Route exact path='/interviewee-detailsCopy' element={<IntervieweeDetailsCopy/>} />
                <Route exact path='/interviewee-details-part-2' element={<IntervieweeDetails02/>} />
                <Route exact path='/interviewee-details-2' element={<IntervieweeDetails2/>} />
                <Route exact path='/interviewee-details-2Copy' element={<IntervieweeDetails2Copy/>} />
                <Route exact path='/single-employee' element={<SingleEmployee/>} />
                <Route exact path='/rate-interviewee' element={<RateInterviewee/>} />
                <Route exact path='/card2' element={<Card/>} />
                <Route exact path='/thank-you' element={<ThankYou/>} />
            </Routes>  
        </Router>
    )
}

export default App;
