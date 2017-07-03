import { mount } from 'avoriaz'
import Bar from 'src/components/Bar'

describe('Bar.vue', () => {
    it('renders a div with class bar', () => {
        const wrapper = mount(Bar)
        expect(wrapper.is('div')).toBe(true)
        expect(wrapper.hasClass('bar')).toBe(true)
    })

    it('renders 4 list elements inside .parent-ul', () => {
        const wrapper = mount(Bar)
        const listElements = wrapper.find('.parent-ul li')
        expect(listElements.length).toBe(4)
    })

    it('renders 2 list elements as direct descendants of .parent-ul', () => {
        const wrapper = mount(Bar)
        const listElements = wrapper.find('.parent-ul > li')
        expect(listElements.length).toBe(2)
    })

    it('.child-ul has color style set to red', () => {
        const wrapper = mount(Bar)
        const childUl = wrapper.find('.child-ul')[0]
        expect(childUl.hasStyle('color', 'red')).toBe(true)
    })
})
