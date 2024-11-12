import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoginPage } from "./pages/loginPage";
import { RegisterPage } from "./pages/registerPage";
import { DashboardPage } from "./pages/dashboardPage";
import { RegisterMealPage } from "./pages/registerMealPage";
import { MealHistoryPage } from './pages/mealHistoryPage';

function App() {
    return (
        <Router>
            <div className="flex">
                <div className="flex-grow">
                    <Routes>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/dashboard" element={<DashboardPage />} />
                        <Route path="/register-meal" element={<RegisterMealPage />} />
                        <Route path="/meal-history" element={<MealHistoryPage />} />
                        <Route path="/" element={<DashboardPage />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
