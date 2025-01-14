import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App/App";
import "./index.css";

import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
/**In order to extend your knowledge to Part-2 of this project
 * Create a Playlist App With the Spotify API (Part Two)
In this project, you will select a feature that you think should be added to your Jammming app. You will use this technical design document template to lay out all of the necessary functionality of this feature, how the feature should be implemented, and why you chose that specific approach. This is an essential step in the development process, so we encourage you to think carefully and thoroughly about your feature and implementation as you work on this project.

Here is an example of a technical design document for implementing multiple playlists in Jammming. You should use it as a resource when deciding what level of information you should include in your design document.

You can pick any feature you want for this project, but we have provided a list of potential options at the end of this article for inspiration. We can’t wait to see your cool new features and unique solutions!

How to Get Started

To start this project, you will need to make a copy of our technical design document template. Open the template in a new tab and then copy the file by selecting all of the content (by clicking and dragging over all of the content, or pressing Ctrl + a) and then pressing copy (by selecting the “Edit” tab and clicking “Copy”, or by pressing Ctrl + c). Then create a new document by navigating to docs.google.com and selecting “Start a New Document > Blank”. Finally, paste the contents of the template into the new document (by selecting the “Edit” tab and clicking “Paste”, or by pressing Ctrl + v). Update the name of the document to something descriptive, and you’ll be ready to work on your project.

Potential Jammming Features:

Include preview samples for each track
Only display songs not currently present in the playlist in the search results
Add a loading screen while playlist is saving
Update the access token logic to expire at exactly the right time, instead of setting expiration from when the user initiates their next search
After user redirect on login, restoring the search term from before the redirect
Ensure playlist information doesn’t get cleared if a user has to refresh their access token
 */