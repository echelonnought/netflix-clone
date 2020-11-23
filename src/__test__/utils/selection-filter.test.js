import selectionFilter  from '../../utils/selection-filter';

test('selctionFilter with legitimate data', () => {
    const series = [
            
        {
            genre: 'documentaries',
            maturity: '15',
            slug: 'best-series-ever',
            description: 'Great series ...',
            id: 'series-1x',
            title: 'Best Series Ever',
        }
    
];

    const films = [
            
                {
                    genre: 'drama',
                    maturity: '15',
                    slug: 'the-prestige',
                    description: 'Great film ...',
                    id: 'film-1x',
                    title: 'The Prestige',
                }
            
    ];

    const slides = selectionFilter({ series, films });
    expect(slides.series[0].title).toBe('Documentaries');
    expect(slides.series[0].data[0].description).toBe('Great series ...');
    expect(slides.series[0].genre).toBe('documentaries');
    expect(slides.series[0].maturity).toBe('15');
    expect(slides.series[0].slug).toBe('best-series-ever');



    expect(slides.films[0].title).toBe('Drama');
    expect(slides.films[0].data[0].description).toBe('Great film ...');
    expect(slides.films[0].genre).toBe('drama');
    expect(slides.films[0].maturity).toBe('15');
    expect(slides.films[0].slug).toBe('the-prestige');
})

test('selectionFilter with no data', () => {
    const slides = selectionFilter();
    expect(slides.series[0].title).toBe('Documentaries');
    expect(slides.films[0].title).toBe('Drama');
    expect(slides.series[0].data).toBe(undefined);
    expect(slides.series[0].data).toBe(undefined);

});
