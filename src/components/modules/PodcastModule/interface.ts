export interface PodcastInterface{
    audio: string
    audio_length_sec: BigInteger
    description_highlighted: string
    description_original: string
    explicit_content: boolean
    guid_from_rss: string
    id: string
    image: string
    itunes_id: bigint
    link: string
    listennotes_url:string
    podcast: Podcast
    pub_date_ms: bigint
    rss: string
    thumbnail: string
    title_highlighted: string
    title_original: string
    transcripts_highlighted: null
  }

  export interface Podcast {
    genre_ids: null
    id: string
    image: string
    listen_score: bigint
    listen_score_global_rank: string
    listennotes_url: string
    publisher_highlighted: string
    publisher_original: string
    thumbnail: string
    title_highlighted: string
    title_original: string
  }