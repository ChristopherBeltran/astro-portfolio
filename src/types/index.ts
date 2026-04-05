export type ArticleId = 'about' | 'projects' | 'stack' | 'contact'

export interface IndexPageState {
  isArticleVisible: boolean
  timeout: boolean
  articleTimeout: boolean
  article: ArticleId | ''
  loading: string
}

export interface HeaderProps {
  onOpenArticle: (article: ArticleId) => void
  timeout: boolean
}

export interface MainProps {
  article: ArticleId | ''
  articleTimeout: boolean
  timeout: boolean
  isArticleVisible: boolean
  onOpenArticle: (article: ArticleId) => void
  onCloseArticle: () => void
  setWrapperRef: (node: HTMLDivElement | null) => void
}

export interface FooterProps {
  timeout: boolean
}