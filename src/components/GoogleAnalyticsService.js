
class GoogleAnalyticsService {
   emitEvent(eventCategory, eventAction, eventLabel = '', eventValue = null) {
    ga('send', 'event', {
      eventCategory: eventCategory,
      eventLabel: `${eventLabel}`,
      eventAction: `${eventCategory} - ${eventAction}`,
      eventValue: eventValue
    });
  }

   emitCurrentPage(pageName) {
    ga('set', 'page', `/${pageName}`);
    ga('send', 'pageview');
  }

}

export default new GoogleAnalyticsService();