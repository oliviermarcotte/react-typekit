import intersection from 'lodash/intersection';
import split from 'lodash/split';
import get from 'lodash/get';
import React, { Component } from 'react';
import buildScript from './utilities/buildScript';

class Typekit extends Component {
  componentDidMount() {
    // If typekit has not yet been executed, force it.
    const { kitId } = this.props;
    const htmlClasses = split(document.querySelector('html').className, ' ');
    const typekitClasses = ['wf-loading', 'wf-active', 'wf-inactive'];
    const isLoaded = intersection(htmlClasses, typekitClasses).length > 0
                     && get(window, 'Typekit.config.kt') === kitId;
    if (this.script && !isLoaded) {
      const script = document.createElement('script');
      script.innerHTML = buildScript(kitId);
      this.script.parentNode.replaceChild(script, this.script);
    }
  }

  render() {
    const { kitId } = this.props;
    return this.props.kitId ? (
      <script
        dangerouslySetInnerHTML={{ __html: buildScript(kitId) }}
        ref={ref => this.script = ref}
      />
    ) : false;
  }
}

export default Typekit;
