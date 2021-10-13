export interface typeMoive {
    page?:         number;
    results?:      Result[];
    totalPages?:   number;
    totalResults?: number;
}



export interface Result {
    id?:               number;
    backdropPath?:     string;
    genreIDS?:         number[];
    voteCount?:        number;
    originalLanguage?: string;
    overview?:         string;
    posterPath?:       string;
    name?:             string;
    firstAirDate?:     Date;
    voteAverage?:      number;
    originalName?:     string;
    originCountry?:    string[];
    popularity?:       number;
    releaseDate?:      Date;
    adult?:            boolean;
    originalTitle?:    string;
    video?:            boolean;
    title?:            string;
}
