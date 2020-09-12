import { STYLES } from '../../utils/styles'

export const stylesheet = {
  names: [
    `[data-control-name="identity_welcome_message"] { color: white !important; background-color: white !important; }`,

    `.neptune-grid > .launchpad__title,
                 .msg-conversation-card__message-snippet-body,
                 .pv-contact-info__card-sub-heading,
                 .entity-hovercard ${STYLES.zeroOpacity}`,

    //  .feed-shared-actor__name > span, -- poster's name in feed
    //  .comments-post-meta__name > span -- commenter's name in feed
    `[data-control-name="actor"] > h3 >  span:first-child,
                 h3[class*="__name"],
                 h3[class*="-name"],
                 a[class*="name"],
                 .feed-shared-actor__name > span,
                 .pv-entity__summary-info > p,
                 [data-control-name="edit_endorsements"],
                 [data-control-name="update_topbar_actor"],
                 .pv-recent-activity-section__card-heading,
                 [data-control-name="topcard"] h2,
                 .pv-top-card-section__name,
                 ul.pv-top-card--list > li, 
                 .search-result-profile-link, 
                 .info-container .profile-info h1.searchable,  
                 .comments-post-meta__name > span,          
                 span[class*="-name"]  ${STYLES.hidden}`,

    `[data-control-name="actor"] > h3 >  span:first-child:before,
                 h3[class*="__name"]:before,
                 h3[class*="-name"]:before,
                 a[class*="name"]:before, 
                 [data-control-name="update_topbar_actor"]:before, 
                 .search-result-profile-link:before,
                 .info-container .profile-info h1.searchable:before,
                 .profile-rail-card__actor-link > span:before,
                 .feed-shared-actor__name > span:before,
                 .comments-post-meta__name > span:before,
                 [data-control-name="topcard"] h2:before ${STYLES.linkText}`,

    `[class*="person-info__shared"] ${STYLES.blur}`,

    `.pv-top-card-section__name:before,
                  span[class*="school"]:before,
                  span[class*="skill"]:before,
                  span[class*="degree"]:before ${STYLES.emptyContent}`,

    `span[class*="school"],
                 span[class*="skill"],
                 span[class*="degree"] ${STYLES.visible}`,

    `.msg-conversation-card__participant-names ${STYLES.hidden}`,

    `.feed-shared-header__text-view a ${STYLES.hidden}`,
  ],
  photos: [
    `span.full-name, a[href^='https://www.linkedin.com/profile'], #sticky-rail *,
                [id^='control_gen_'] > div.header > h3,
                #aux > div.insights > h3 ${STYLES.colorToBlack}`,

    `.presence-entity__image,
                 .pv-top-card-section__profile-photo-container .pv-top-card-section__image,
                 .profile-img,
                 .profile-photo-edit__preview,
                 .pv-browsemap-section__member-image,
                 img ${STYLES.smallBlur}`,

    `#aux > div.insights > h3::after,
                [id^='control_gen_'] > div.header > h3::after ${STYLES.emptyBlock}`,

    `#in-common > svg > circle[fill^='url('] { fill-opacity: 0 !important; fill: black !important; }`,

    `.msg-facepile-grid--no-facepile .msg-facepile-grid__img ${STYLES.smallBlur}`,

    `.msg-s-message-list--envelope-enabled .msg-s-event-listitem__profile-picture ${STYLES.blur}`,
  ],
  nameId: 'BIAS_NAMES_LINKEDIN',
  photoId: 'BIAS_LINKEDIN',
}

export default stylesheet
