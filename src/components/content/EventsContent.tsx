
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ContentProps } from '../MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const EventsContent: React.FC<ContentProps> = ({ setActiveContent }) => {
  const weeklyEvents = [
    {
      id: 'weekly-1',
      title: 'Sunday Sessions',
      venue: 'Good Vibes, Siem Reap',
      time: '16:00 - Late'
    },
    {
      id: 'weekly-2',
      title: 'Industry Night',
      venue: 'XBar, Siem Reap',
      time: 'Tuesday, 21:00 - Late'
    },
    {
      id: 'weekly-3',
      title: 'Mainroom',
      venue: 'XBar, Siem Reap',
      time: 'Saturday, 22:00 - Late'
    }
  ];

  const events = [
    {
      id: '001',
      title: 'Graham Gold & Guests @ Cheers',
      date: '2025-03-29',
      venue: 'Cheers Pub Street, Siem Reap',
      artists: ['Graham Gold', 'TheDonStone', 'Heuristic'],
      description: 'Journey through melodic and europhoic trance in the heart of Siem Reap.',
      time: '23:00 - 05:00'
    },
    {
      id: '002',
      title: 'Sunday at Soujorner',
      date: '2025-03-30',
      venue: 'Sojourner House, Siem Reap',
      artists: ['Graham Gold', 'TheDonStone', 'Heuristic'],
      description: 'VIP Sunday brunch pool party with deep house vibes.',
      time: '12:00 - 01:00'
    },
    {
      id: '003',
      title: 'Angkor Bliss Khmer New Year Celebration',
      date: '2025-04-14',
      venue: 'Angkor Bliss, Siem Reap',
      artists: ['TheDonStone', 'Braythedon', 'DEL30', 'Goddamn Kiddo', 'Maximillian', 'Roka', 'Strangefruit', 'Jam-Cha'],
      description: 'Celebrating Khmer New Year with an all-day, all-night rave in the jungles of Siem Reap.',
      time: '18:00 - 08:00'
    },
    {
      id: '004',
      title: 'Paul Oakenfold @ Chew & Bash',
      date: '2025-04-26',
      venue: 'Chew & Bash, Phnom Penh',
      artists: ['Paul Oakenfold'],
      description: 'In Search of Sunrise in Siem Reap featuring Paul Oakenfold & guests.',
      time: '22:00 - 06:00'
    },
    {
      id: '005',
      title: 'Paul Oakenfold @ The Labyrinth',
      date: '2025-04-30',
      venue: 'The Labyrinth, Siem Reap',
      artists: ['Paul Oakenfold', 'TheDonStone', 'Braythedon'],
      description: 'In Search of Sunrise in Siem Reap featuring Paul Oakenfold & guests.',
      time: '22:00 - 06:00'
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-display tracking-wider text-primary mb-4">_EVENTS</h2>
      
      <ScrollArea className="h-[calc(100vh-16rem)]">
        <div className="pr-4 space-y-4">
          {/* Weekly Events Section */}
          <Card className="bg-transparent border border-primary">
            <CardHeader className="pb-1 pt-3">
              <CardTitle className="text-md sm:text-lg text-primary font-display tracking-wider">WEEKLY EVENTS</CardTitle>
            </CardHeader>
            <CardContent className="pt-1 pb-3">
              <div className="grid gap-2">
                {weeklyEvents.map((event) => (
                  <div key={event.id} className="border border-border hover:border-primary transition-colors duration-150 p-2">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                      <h3 className="text-sm sm:text-md text-secondary font-display tracking-wider mb-1 sm:mb-0">{event.title}</h3>
                      <div className="text-xs text-muted-foreground">{event.time}</div>
                    </div>
                    <div className="text-xs text-muted-foreground">{event.venue}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Regular Events Section */}
          <h3 className="text-md sm:text-lg text-primary font-display tracking-wider mt-6 mb-3">UPCOMING SPECIAL EVENTS</h3>
          
          {events.map((event) => (
            <div key={event.id} className="border border-border hover:border-primary transition-colors duration-150">
              <div className="border-b border-border p-3">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <h3 className="text-md sm:text-lg text-secondary font-display tracking-wider mb-1 sm:mb-0">{event.title}</h3>
                  <div className="text-xs border border-border px-2 py-1 self-start">
                    {new Date(event.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </div>
                </div>
                <div className="mt-1">
                  <div className="text-sm">{event.venue}</div>
                  <div className="text-xs text-muted-foreground">{event.time}</div>
                </div>
              </div>
              
              <div className="p-3 border-b border-border">
                <h4 className="text-xs mb-2 text-muted-foreground">FEATURING:</h4>
                <div className="text-xs grid grid-cols-1 sm:grid-cols-2 gap-y-1">
                  {event.artists.map((artist, index) => (
                    <div key={index} className="flex">
                      <span className="text-primary mr-2">{`>`}</span>
                      <span>{artist}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-3 text-xs text-muted-foreground">
                {event.description}
              </div>
            </div>
          ))}
          
          <div className="border border-primary p-3 mt-6">
            <div className="text-sm">
              SUBSCRIBE TO OUR MAILING LIST FOR EXCLUSIVE EVENT INVITATIONS
            </div>
            <div className="text-xs text-muted-foreground mt-2">
              EVENTS@INTERLINKED-RECORDS.NET
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default EventsContent;
