import { useState, useEffect, useRef, useCallback } from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import type { ArticleId, IndexPageState } from '../types'

const IndexApp = () => {
  const [state, setState] = useState<IndexPageState>({
    isArticleVisible: false,
    timeout: false,
    articleTimeout: false,
    article: '',
    loading: 'is-loading'
  })
  const wrapperRef = useRef<HTMLDivElement | null>(null)

  const handleCloseArticle = useCallback(() => {
    setState(prev => ({ ...prev, articleTimeout: !prev.articleTimeout }))

    setTimeout(() => {
      setState(prev => ({ ...prev, timeout: !prev.timeout }))
    }, 325)

    setTimeout(() => {
      setState(prev => ({
        ...prev,
        isArticleVisible: !prev.isArticleVisible,
        article: ''
      }))
    }, 350)
  }, [])

  const handleOpenArticle = useCallback((article: ArticleId) => {
    setState(prev => ({
      ...prev,
      isArticleVisible: !prev.isArticleVisible,
      article
    }))

    setTimeout(() => {
      setState(prev => ({ ...prev, timeout: !prev.timeout }))
    }, 325)

    setTimeout(() => {
      setState(prev => ({ ...prev, articleTimeout: !prev.articleTimeout }))
    }, 350)
  }, [])

  const setWrapperRef = useCallback((node: HTMLDivElement | null) => {
    wrapperRef.current = node
  }, [])

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
      if (state.isArticleVisible) {
        handleCloseArticle()
      }
    }
  }, [state.isArticleVisible, handleCloseArticle])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setState(prev => ({ ...prev, loading: '' }))
    }, 100)
    return () => clearTimeout(timeoutId)
  }, [])

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [handleClickOutside])

  return (
    <div className={`body ${state.loading} ${state.isArticleVisible ? 'is-article-visible' : ''}`}>
      <div id="wrapper">
        <Header onOpenArticle={handleOpenArticle} timeout={state.timeout} />
        <Main
          isArticleVisible={state.isArticleVisible}
          timeout={state.timeout}
          articleTimeout={state.articleTimeout}
          article={state.article}
          onOpenArticle={handleOpenArticle}
          onCloseArticle={handleCloseArticle}
          setWrapperRef={setWrapperRef}
        />
        <Footer timeout={state.timeout} />
      </div>
      <div id="bg"></div>
    </div>
  )
}

export default IndexApp
