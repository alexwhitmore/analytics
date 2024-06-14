# Analytics

An open-source, privacy-first Google Analytics alternative.

## Page View Features

1. Session management

   - Track user sessions to differentiate between unique users and their interactions over time.
   - Use cookies or local storage to store session identifiers. Using cookies should be opt-in, with either a backup method being local storage, or disabled completely.

2. User Identification

   - If applicable, track user identifiers to associate page views with specific users.
   - Ensure you handle personally identifiable information (PII) according to privacy laws and regulations.

3. Event Timing

   - Track the timestamp of each page view to analyze traffic patterns and user behavior over time.
   - Ensure the timestamp is accurate and in a consistent format.

4. Referrer Information

   - Capture the referrer URL to understand where your traffic is coming from.
   - This helps in analyzing the effectiveness of marketing campaigns and referral sources.

5. Page Metadata

   - Track additional metadata such as page titles, categories, or tags.
   - This can provide more context for each page view and enable more detailed analysis.
   - **Side note**: this can also be useful for assisting with improving the sites SEO, or at least giving the user more information to help improve their SEO.

6. Error Handling

   - Implement robust error handling to ensure that tracking continues to work even if there are issues with the analytics endpoint.
   - Log errors for debugging and monitoring purposes.

7. Privacy and Consent

   - Comply with privacy regulations such as GDPR, CCPA, etc.
   - Provide users with options to consent to tracking and respect their preferences.

8. Performance Impact

   - Ensure that tracking scripts and requests do not significantly impact page load times or user experience.
   - Use asynchronous loading for tracking scripts and consider batching requests if necessary.
   - The generated script inserted inside the `<head>` tag should be sized appropriately for opt-in selections. For example, if I opt out of pageViews being tracked in Cookies/localStorage, none of the relating code should be inserted.

9. Mobile and SPA Considerations

   - For Single Page Applications (SPAs), ensure that page views are tracked correctly when the route changes without a full page reload.
   - Consider specific behaviors and interactions on mobile devices.

10. Data Validation and Quality

    - Implement mechanisms to validate the data being sent to ensure accuracy and consistency.
    - Regularly review and clean the data to maintain its quality.
