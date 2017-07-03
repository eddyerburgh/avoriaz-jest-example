import { shallow } from 'avoriaz'
import Foo from 'src/components/Foo'
import Bar from 'src/components/Bar'

describe('Foo.vue', () => {
    it('renders an h1', () => {
        const wrapper = shallow(Foo)
        expect(wrapper.find('h1').length).toBe(1)
    })

    it('h1 renders data.msg as text', () => {
        const wrapper = shallow(Foo)
        const msg = wrapper.data().msg
        expect(wrapper.find('h1')[0].text()).toBe(msg)
    })

    it('h1 text changes when button is clicked', () => {
        const expectedMessage = 'new message'

        const wrapper = shallow(Foo)
        const button = wrapper.find('#change-message')[0]
        button.trigger('click')

        expect(wrapper.find('h1')[0].text()).toBe(expectedMessage)
    })

    it('renders a message that equals prop msg2', () => {
        const msg2 = 'test message'
        const wrapper = shallow(Foo, { propsData: { msg2 } })
        const text = wrapper.find('p')[0].text()
        expect(text).toBe(msg2)
    })
})