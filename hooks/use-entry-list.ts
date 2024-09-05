import { getDefaultStore, useAtomValue, useSetAtom } from 'jotai'
import { useEffect } from 'react'
import { unstable_serialize } from 'swr'

import { db } from '~/db'
import { addUnreadEntryListAtom, setUnreadEntryListAtom, showUnreadOnlyAtom, unreadEntryMapAtom } from '~/store/entry'

import { useQuerySubscription } from './use-query-subscription'

function isArrayEmpty(arr?: any[]) {
  return !arr || arr.length === 0
}

export function useEntryList(
  feedIdList?: string[],
  entryIdList?: string[],
) {
  const showUnreadOnly = useAtomValue(showUnreadOnlyAtom)
  const sub = useQuerySubscription(
    db.query.entries.findMany({
      where(fields, { inArray, or }) {
        return or(inArray(fields.feedId, feedIdList ?? []), inArray(fields.id, entryIdList ?? []))
      },
      orderBy(fields, { desc }) {
        return [desc(fields.publishedAt)]
      },
      with: {
        feed: true,
      },
    }),
    ['entries', { feedIdList }],
    {
      afterRevalidate(data) {
        const showUnreadOnly = getDefaultStore().get(showUnreadOnlyAtom)
        if (!data || !feedIdList)
          return
        if (showUnreadOnly) {
          addUnreadItems(
            feedIdList,
            data.filter(i => !i.read).map(i => i.id),
          )
        }
        else {
          setUnreadItems(
            feedIdList,
            data.filter(i => !i.read).map(i => i.id),
          )
        }
      },
    },
  )

  const unreadEntryMap = useAtomValue(unreadEntryMapAtom)
  const setUnreadItems = useSetAtom(setUnreadEntryListAtom)
  const addUnreadItems = useSetAtom(addUnreadEntryListAtom)
  const unreadItems = unreadEntryMap[unstable_serialize(feedIdList)]

  useEffect(() => {
    if (!unreadItems && sub.data && feedIdList) {
      setUnreadItems(
        feedIdList,
        sub.data.filter(i => !i.read).map(i => i.id),
      )
    }
  }, [feedIdList, setUnreadItems, sub.data, unreadItems])

  return {
    ...sub,
    data: sub.data?.filter(i => isArrayEmpty(feedIdList) || !showUnreadOnly || !unreadItems || unreadItems.has(i.id)),
  }
}
