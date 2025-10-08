# WEB103 Project 3 - *TrailQuest*

Submitted by: **Allyson Keightley**

About this web app: **TrailQuest is a lightweight web app for discovering outdoor spots and meetups. The homepage presents trail locations as photo cards with difficulty, coordinates, and tags; open any location to see all of its upcoming events. An All Events view lets you browse everything at once, with clean PicoCSS cards and live countdowns to start times. Use TrailQuest to plan group hikes, find skills clinics, or host your own outings, fast and simple!**

Time spent: **8** hours

## Required Features

The following **required** functionality is completed:

- [x] **The web app uses React to display data from the API**
- [x] **The web app is connected to a PostgreSQL database, with an appropriately structured Events table**
  - [x]  **NOTE: Your walkthrough added to the README must include a view of your Render dashboard demonstrating that your Postgres database is available**
  - [x]  **NOTE: Your walkthrough added to the README must include a demonstration of your table contents. Use the psql command 'SELECT * FROM tablename;' to display your table contents.**
- [x] **The web app displays a title.**
- [x] **Website includes a visual interface that allows users to select a location they would like to view.**
  - [x] *Note: A non-visual list of links to different locations is insufficient.* 
- [x] **Each location has a detail page with its own unique URL.**
- [x] **Clicking on a location navigates to its corresponding detail page and displays list of all events from the `events` table associated with that location.**

The following **optional** features are implemented:

- [x] An additional page shows all possible events
  - [ ] Users can sort *or* filter events by location.
- [x] Events display a countdown showing the time remaining before that event
  - [x] Events appear with different formatting when the event has passed (ex. negative time, indication the event has passed, crossed out, etc.).

The following **additional** features are implemented:

- [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='client/public/trailquest.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with ...

[Kap](https://getkap.co/) for macOS


## Notes

Once again, I spent a good chunk of time, trying to get my imports correctly aligned for the table creation and seeding. Aside from that, redoing the fron end from what was there into what I wanted was quite a challenge. Building from scratch would have probably been easier for me to understand. All in all, a great learning project!

## License

Copyright 2025 Allyson Keightley

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
