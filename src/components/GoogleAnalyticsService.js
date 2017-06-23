
class GoogleAnalyticsService {
   emitEvent(eventCategory, eventAction, eventLabel = '', eventValue = null) {
    window.ga('send', 'event', {
      eventCategory: eventCategory,
      eventLabel: `${eventLabel}`,
      eventAction: `${eventCategory} - ${eventAction}`,
      eventValue: eventValue
    });
  }

   emitCurrentPage(pageName) {
    window.ga('set', 'page', `/${pageName}`);
    window.ga('send', 'pageview');
  }

}

export default new GoogleAnalyticsService();