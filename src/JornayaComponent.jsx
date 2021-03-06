import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import PropTypes from 'prop-types';

const JornayaComponent = ({ jornayaToken, onGetUniversalLeadId }) => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.setUniversalLeadId = onGetUniversalLeadId;
            const script = document.createElement('script');
            script.id = 'LeadiDscript_campaign';
            script.type = 'text/javascript';
            script.async = true;
            script.defer = true;
            script.crossorigin = 'anonymous';

            script.src = `https://create.lidstatic.com/campaign/${jornayaToken}.js?snippet_version=2&callback=setUniversalLeadId`;
            document.body.appendChild(script);
        }
    }, []);

    return null;
};

JornayaComponent.propTypes = {
    jornayaToken: PropTypes.string.isRequired,
    onGetUniversalLeadId: PropTypes.func.isRequired,
};

export default JornayaComponent;
