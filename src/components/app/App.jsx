import { useSelector } from 'react-redux';
import { Suspense } from 'react';
import AppBar from 'components/appBar/AppBar';
import BlockInfo from 'components/blockInfo/BlockInfo';
import PortfolioBox from 'components/portfolioBox/PortfolioBox';
import LastInfo from 'components/lastInfo/LastInfo';

function App() {
    const admin = useSelector(state => state.admin);
    console.log(admin);
    return (
        <Suspense fallback={null}>
            <AppBar />
            <BlockInfo />
            <PortfolioBox />
            <LastInfo />
        </Suspense>
    );
}

export default App;
