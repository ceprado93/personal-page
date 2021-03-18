import { Switch, Route } from 'react-router-dom'

import IndexPage from '../pages/Index/Index'
import About from '../pages/About/About-skills'
import Skills from '../pages/Skills/Skills'
import Portfolio from '../pages/Portfolio/Portfolio'


const Routes = () => {

    return (
        <Switch>
            <Route path="/" exact render={() => <IndexPage />} />
            <Route path="/about" exact render={() => <About />} />
            <Route path="/skills" exact render={() => <Skills />} />
            <Route path="/portfolio" exact render={() => <Portfolio />} />

        </Switch>
    )
}

export default Routes