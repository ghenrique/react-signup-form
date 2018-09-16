/**
 * Card Component
 * 
 * This is a component that renders a card with custom properties, not needing to import
 * all the dependencies of a Card in reactstrap.
 * 
 * Default Properties:
 * - title: Receives the title of the card.
 * - subtitle: Receives the subtitle of the card, if necessary.
 * - className: Receives a custom className to the componenent.
 */

/**
 * Component Usage
 * 
 * <CustomCard
 *  title="My Card"
 *  subtitle="This is my custom card">
 *      <p>This is my custom card content</p>
 * </CustomCard>
 */

import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import PropTypes from 'prop-types';

class CustomCard extends Component {
    render() {
        const { className, title, subtitle, children, ...rest } = this.props;

        return (
            <div
                {...rest}
                className={`custom-card ${className}`}
            >
                <Card>
                    <CardBody>
                        { title && <CardTitle>{ title }</CardTitle> }
                        { subtitle && <CardSubtitle>{ subtitle }</CardSubtitle> }

                        {/* .custom-card__content */}
                        <section className="custom-card__content">
                            { children }
                        </section>
                        {/* \ .custom-card__content */}
                    </CardBody>
                </Card>
            </div>
        );
    }
}

CustomCard.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
}

export default CustomCard;