import React, { Component } from 'react';
import PageTitle from '../pageTitle';
import Me from './me.jpg';

class Bio extends Component {
    render() {
        return(
            <section className="aic-content aic-pull-forward">
                <PageTitle text="About Me"/>
                <img src={Me} alt="Andrew Carlson" />
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum libero porta mi mollis, nec vulputate felis posuere. Morbi semper arcu ut diam egestas molestie. Mauris auctor quam non ex dapibus finibus. Pellentesque massa nulla, convallis eget lectus non, dapibus commodo enim.
                </p>
                <p>
                Nullam mattis felis ac magna semper cursus. Sed ultrices dui id lectus suscipit, et mattis sem convallis. Curabitur eros ex, ultrices non velit et, consectetur interdum purus. Sed libero risus, pulvinar id commodo et, viverra eu justo. Aliquam erat volutpat. Vivamus dui magna, egestas non nibh a, laoreet tincidunt sapien.
                </p>
            </section>
        );
    }
}

export default Bio;